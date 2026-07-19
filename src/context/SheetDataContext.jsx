import React, { createContext, useContext, useState, useEffect } from "react";
import Papa from "papaparse";

const SheetDataContext = createContext();

// Clean up markdown bracketed links and convert Google Drive share links into hotlink image URLs
function sanitizeUrl(url) {
  if (!url) return "";
  let cleanUrl = url.trim();

  // Check for markdown pattern [Link Text](Link URL)
  const regex = /\[([^\]]+)\]\(([^)]+)\)/;
  const match = cleanUrl.match(regex);
  if (match && match[2]) {
    cleanUrl = match[2].trim();
  } else if (cleanUrl.startsWith("[") && cleanUrl.endsWith("]")) {
    cleanUrl = cleanUrl.slice(1, -1).trim();
  }

  // Handle Google Drive links
  if (
    cleanUrl.includes("drive.google.com") ||
    cleanUrl.includes("docs.google.com")
  ) {
    let fileId = "";

    // Pattern 1: /file/d/FILE_ID/...
    const pathMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (pathMatch && pathMatch[1]) {
      fileId = pathMatch[1];
    }

    // Pattern 2: ?id=FILE_ID or &id=FILE_ID
    if (!fileId) {
      const queryMatch = cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (queryMatch && queryMatch[1]) {
        fileId = queryMatch[1];
      }
    }

    // Pattern 3: /d/FILE_ID/
    if (!fileId) {
      const dMatch = cleanUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (dMatch && dMatch[1]) {
        fileId = dMatch[1];
      }
    }

    if (fileId) {
      // Use lh3.googleusercontent.com/d/FILE_ID which works cleanly for rendering images
      return `https://lh3.googleusercontent.com/d/$${fileId}`;
    }
  }

  return cleanUrl;
}

export function SheetDataProvider({ children }) {
  // Initial states set to empty arrays so nothing renders before loading completes
  const [slides, setSlides] = useState([]);
  const [detailedUniversities, setDetailedUniversities] = useState([]);
  const [services, setServices] = useState([]);
  const [stats, setStats] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [news, setNews] = useState([]);
  const [addressDetails, setAddressDetails] = useState([]);
  const [successStories, setSuccessStories] = useState([]);
  const [countryPages, setCountryPages] = useState([]);
  const [ceoImage, setCeoImage] = useState();
  const [ceoData, setCeoData] = useState(null);
  const [servicesHero, setServicesHero] = useState([]);
  const [servicesCounselling, setServicesCounselling] = useState([]);
  const [servicesDetailedSections, setServicesDetailedSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAllSheetData() {
      try {
        const baseUrl =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vT3dsbe-JxsO6vMWG1Q14YfTT3_ZXbLJRwz_ZmF6nUPZ8zmBv6beHkU8s1X5KYPH2bYtOOyZ0jUoWB3/pub?output=csv&gid=";

        // Define helpers for fetching + parsing
        const fetchCSV = (gid) => {
          return new Promise((resolve, reject) => {
            const url = `${baseUrl}${gid}&_t=${Date.now()}`;
            Papa.parse(url, {
              download: true,
              header: true,
              skipEmptyLines: true,
              complete: (results) => {
                resolve(results.data);
              },
              error: (err) => {
                reject(err);
              },
            });
          });
        };

        // Fetch all in parallel
        const [
          rawSlides,
          rawUnis,
          rawServices,
          rawStats,
          rawTestimonials,
          rawNews,
          rawCountryPages,
          rawSuccessStories,
          rawAddressDetails,
          rawCeoImage,
          rawServicesHero,
          rawServicesCounselling,
          rawServicesDetailedSections,
        ] = await Promise.all([
          fetchCSV("0").catch((err) => {
            console.error("Error fetching slides:", err);
            return null;
          }),
          fetchCSV("989598457").catch((err) => {
            console.error("Error fetching unis:", err);
            return null;
          }),
          fetchCSV("1092524110").catch((err) => {
            console.error("Error fetching services:", err);
            return null;
          }),
          fetchCSV("80491032").catch((err) => {
            console.error("Error fetching stats:", err);
            return null;
          }),
          fetchCSV("1542643992").catch((err) => {
            console.error("Error fetching testimonials:", err);
            return null;
          }),
          fetchCSV("116671510").catch((err) => {
            console.error("Error fetching news:", err);
            return null;
          }),
          fetchCSV("1310477678").catch((err) => {
            console.error("Error fetching countryPages:", err);
            return null;
          }),
          fetchCSV("2074003284").catch((err) => {
            console.error("Error fetching successStories:", err);
            return null;
          }),
          fetchCSV("1184408471").catch((err) => {
            console.error("Error fetching successStories:", err);
            return null;
          }),
          fetchCSV("536140101").catch((err) => {
            console.error("Error fetching successStories:", err);
            return null;
          }),
          fetchCSV("2018573685").catch((err) => {
            console.error("Error fetching servicesHero:", err);
            return null;
          }),
          fetchCSV("78813676").catch((err) => {
            console.error("Error fetching servicesCounselling:", err);
            return null;
          }),
          fetchCSV("1691454945").catch((err) => {
            console.error("Error fetching servicesDetailedSections:", err);
            return null;
          }),
        ]);

        // Process Slides GID: 0
        if (rawSlides && rawSlides.length > 0) {
          const parsedSlides = rawSlides
            .map((row) => ({
              id: parseInt(row.id || row.ID || "1", 10),
              image: sanitizeUrl(row.image || row.Image || row.imageUrl || ""),
              title: row.title || row.Title || "",
              subtitle: row.subtitle || row.Subtitle || row.subTitle || "",
              ctaText: row.ctaText || row.CtaText || row.cta || "Explore More",
            }))
            .filter((s) => s.title && s.image);

          if (parsedSlides.length > 0) {
            setSlides(parsedSlides);
          }
        }

        // Process Universities GID: 989598457
        if (rawUnis && rawUnis.length > 0) {
          const parsedUnis = rawUnis
            .map((row) => {
              const rawName =
                row["University Name"] || row.name || row.Name || "";
              const rawLogoPlaceholder = rawName
                ? rawName
                    .trim()
                    .split(/\s+/)
                    .map((w) => w[0])
                    .join("")
                    .substring(0, 4)
                    .toUpperCase()
                : "UNI";

              return {
                id: parseInt(row.ID || row.id || "1", 10),
                name: rawName.trim(),
                location: row.Location || row.location || "",
                country: (row.Country || row.country || "").trim(),
                logoPlaceholder: rawLogoPlaceholder,
                color: row.color || row.Color || "#2c3164",
                logoUrl: sanitizeUrl(
                  row.logoUrl || row.logourl || row.LogoUrl || "",
                ),
                ranking: row.Ranking || row.ranking || "",
                popularCourse:
                  row["Popular Course"] ||
                  row.popularCourse ||
                  row.popular_course ||
                  "",
                intake: row.Intake || row.intake || "",
                tuition: row.Tuition || row.tuition || "",
                scholarships: row.scholarships || row.Scholarships || "",
                ielts: row.ielts || row.IELTS || row.Ielts || "",
                campusServices:
                  row.campusServices ||
                  row["Campus Services"] ||
                  row.campus_services ||
                  "",
                description: row.description || row.Description || "",
              };
            })
            .filter((u) => u.name && u.country);

          if (parsedUnis.length > 0) {
            setDetailedUniversities(parsedUnis);
          }
        }

        // Process Services GID: 1092524110
        if (rawServices && rawServices.length > 0) {
          const serviceIcons = {
            1: "HeartHandshake",
            2: "Compass",
            3: "GraduationCap",
            4: "FileCheck",
          };
          const parsedServices = rawServices
            .map((row) => {
              const idVal = parseInt(row.id || row.ID || "1", 10);
              return {
                id: idVal,
                title: row.title || row.Title || "",
                description: row.description || row.Description || "",
                icon:
                  row.icon ||
                  row.Icon ||
                  serviceIcons[idVal] ||
                  "HeartHandshake",
              };
            })
            .filter((s) => s.title);

          if (parsedServices.length > 0) {
            setServices(parsedServices);
          }
        }

        // Process Stats GID: 80491032
        if (rawStats && rawStats.length > 0) {
          const statIcons = {
            1: "Calendar",
            2: "School",
            3: "Users",
            4: "Award",
          };
          const parsedStats = rawStats
            .map((row) => {
              const idVal = parseInt(row.id || row.ID || "1", 10);
              return {
                id: idVal,
                value: row.value || row.Value || "",
                label: row.label || row.Label || "",
                description: row.description || row.Description || "",
                icon: row.icon || row.Icon || statIcons[idVal] || "Calendar",
              };
            })
            .filter((s) => s.label);

          if (parsedStats.length > 0) {
            setStats(parsedStats);
          }
        }

        // Process Testimonials GID: 1542643992
        if (rawTestimonials && rawTestimonials.length > 0) {
          const parsedTestimonials = rawTestimonials
            .map((row) => {
              return {
                id: parseInt(row.id || row.ID || "1", 10),
                name: row.name || row.Name || "",
                university: row.university || row.University || "",
                country: row.country || row.Country || "",
                rating: parseInt(row.rating || row.Rating || "5", 10),
                feedback: row.feedback || row.Feedback || "",
                photo: sanitizeUrl(row.photo || row.Photo || ""),
                type: row.type || row.Type || "text",
              };
            })
            .filter((t) => t.name && t.feedback);

          if (parsedTestimonials.length > 0) {
            setTestimonials(parsedTestimonials);
          }
        }
        // Process Address Details
        if (rawAddressDetails && rawAddressDetails.length > 0) {
          const parsedAddressDetails = rawAddressDetails
            .map((row) => {
              return {
                id: parseInt(row.id || 10),
                addressDetails: row.addressDetails || "",
                contact: row.contact || "",
                email: row.email || "",
              };
            })
            .filter((addr) => addr.addressDetails);
          if (parsedAddressDetails.length > 0) {
            setAddressDetails(parsedAddressDetails);
          }
        }
        // Process News/Blogs GID: 116671510
        if (rawNews && rawNews.length > 0) {
          const parsedNews = rawNews
            .map((row) => {
              const rawTitle = row.title || row.Title || "";
              const lowerTitle = rawTitle.toLowerCase();

              let category = row.category || row.Category || "";
              if (!category) {
                if (lowerTitle.includes("australia"))
                  category = "Australia Guide";
                else if (lowerTitle.includes("canada")) category = "Canada Hub";
                else if (lowerTitle.includes("uk")) category = "UK Career";
                else if (lowerTitle.includes("usa")) category = "USA Visa";
                else if (lowerTitle.includes("new zealand"))
                  category = "New Zealand Guide";
                else category = "General Guide";
              }

              const rawExcerpt = row.excerpt || row.Excerpt || "";
              const rawArticle =
                row.article || row.Article || row.content || row.Body || "";

              const excerpt =
                rawExcerpt.trim() ||
                (rawArticle
                  ? rawArticle.split("\n")[0].substring(0, 150).trim() + "..."
                  : "Click to read full article.");

              return {
                id: parseInt(row.id || row.ID || "1", 10),
                title: rawTitle.trim(),
                excerpt: excerpt,
                category: category,
                date:
                  row["Published on"] ||
                  row["Published On"] ||
                  row.date ||
                  row.Date ||
                  "Jun 10, 2026",
                image: sanitizeUrl(
                  row.image || row.Image || row.imageUrl || row.Photo || "",
                ),
                readTime:
                  row.readTime || row.readtime || row.ReadTime || "5 min read",
                writtenBy:
                  row["Written by"] ||
                  row["Written By"] ||
                  row.writtenBy ||
                  row.author ||
                  "Western Study",
                article: rawArticle,
              };
            })
            .filter((n) => n.title);

          if (parsedNews.length > 0) {
            setNews(parsedNews);
          }
        }
        if (rawCeoImage && rawCeoImage.length > 0) {
          const row = rawCeoImage[0];
          const imgUrl = sanitizeUrl(
            row.image_Url || row.imageUrl || row.image || row.Image || ""
          );
          const parsedCeo = {
            image: imgUrl,
            name: row.name || row.Name || "",
            title: row.title || row.Title || "",
            subTitle: row.subTitle || row.subtitle || row.Company || row.company || "",
            quote: row.quote || row.Quote || "",
            messageP1: row.message_p1 || row.messageP1 || row.paragraph1 || row.message || "",
            messageP2: row.message_p2 || row.messageP2 || row.paragraph2 || "",
            experience: row.experience || row.Experience || "",
            experienceLabel: row.experience_label || row.experienceLabel || "",
          };
          setCeoData(parsedCeo);
          if (imgUrl) {
            setCeoImage(imgUrl);
          }
        }
        // Process CountryWise_Pages GID: 1310477678
        if (rawCountryPages && rawCountryPages.length > 0) {
          const parsedCountryPages = rawCountryPages
            .map((row) => {
              return {
                id: parseInt(row.id || row.ID || "1", 10),
                country: (row.Country || row.country || "").trim(),
                overview: row.Overview || row.overview || "",
                admissionProcess:
                  row["Admission Process"] ||
                  row.admissionProcess ||
                  row.admission_process ||
                  "",
                faq: row.FAQ || row.faq || "",
              };
            })
            .filter((c) => c.country);

          if (parsedCountryPages.length > 0) {
            setCountryPages(parsedCountryPages);
          }
        }

        // Process success_Story GID: 2074003284
        if (rawSuccessStories && rawSuccessStories.length > 0) {
          const parsedSuccessStories = rawSuccessStories
            .map((row) => {
              return {
                id: parseInt(row.id || row.ID || "1", 10),
                name: row.student_Name || row.name || row.Name || "",
                country: row.country_Name || row.country || row.Country || "",
                university: (
                  row.university_Name ||
                  row.university ||
                  row.University ||
                  ""
                ).trim(),
                image: sanitizeUrl(
                  row.image_Url || row.imageUrl || row.image || row.Image || "",
                ),
                fbLink: sanitizeUrl(
                  row.facbook_Url ||
                    row.facebook_Url ||
                    row.fbLink ||
                    "https://www.facebook.com/westernstudy/reviews",
                ),
              };
            })
            .filter((s) => s.name);

          if (parsedSuccessStories.length > 0) {
            setSuccessStories(parsedSuccessStories);
          }
        }

        // Process Services Hero
        if (rawServicesHero && rawServicesHero.length > 0) {
          const parsedServicesHero = rawServicesHero
            .map((row) => ({
              badge: row.badge || row.Badge || "",
              title1: row.title1 || row.Title1 || "",
              title2: row.title2 || row.Title2 || "",
              bgImage: sanitizeUrl(row.bgImage || row.BgImage || row.image || row.Image || ""),
            }))
            .filter((h) => h.title1 || h.title2);

          if (parsedServicesHero.length > 0) {
            setServicesHero(parsedServicesHero);
          }
        }

        // Process Services Counselling Cards
        if (rawServicesCounselling && rawServicesCounselling.length > 0) {
          const parsedCounselling = rawServicesCounselling
            .map((row) => ({
              id: row.id || row.ID || "",
              title: row.title || row.Title || "",
              desc: row.desc || row.Description || row.description || "",
              icon: row.icon || row.Icon || "Compass",
            }))
            .filter((c) => c.title);

          if (parsedCounselling.length > 0) {
            setServicesCounselling(parsedCounselling);
          }
        }

        // Process Services Detailed Sections (Application, Visa, Accommodation, Pre-Departure)
        if (rawServicesDetailedSections && rawServicesDetailedSections.length > 0) {
          const parsedDetailedSections = rawServicesDetailedSections
            .map((row) => {
              const rawChecklist = row.checklist || row.Checklist || "";
              const checklistArray = rawChecklist
                ? rawChecklist.split(/[|\n]+/).map((item) => item.trim()).filter(Boolean)
                : [];
              
              return {
                sectionKey: (row.sectionKey || row.SectionKey || "").trim().toLowerCase(),
                title: row.title || row.Title || "",
                description: row.description || row.Description || row.desc || "",
                bgImage: sanitizeUrl(row.bgImage || row.BgImage || row.image || row.Image || ""),
                checklist: checklistArray,
              };
            })
            .filter((s) => s.sectionKey && s.title);

          if (parsedDetailedSections.length > 0) {
            setServicesDetailedSections(parsedDetailedSections);
          }
        }

        setLoading(false);
      } catch (err) {
        console.error("Failed to load Google Sheets dynamic data:", err);
        setError(err);
        setLoading(false);
      }
    }

    loadAllSheetData();
  }, []);

  return (
    <SheetDataContext.Provider
      value={{
        slides,
        detailedUniversities,
        services,
        stats,
        testimonials,
        news,
        countryPages,
        successStories,
        addressDetails,
        ceoImage,
        ceoData,
        servicesHero,
        servicesCounselling,
        servicesDetailedSections,
        loading,
        error,
      }}
    >
      {children}
    </SheetDataContext.Provider>
  );
}

export function useSheetData() {
  const context = useContext(SheetDataContext);
  if (!context) {
    throw new Error("useSheetData must be used within a SheetDataProvider");
  }
  return context;
}
