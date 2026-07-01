import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fiestacabs.com";

  // Define your static routes here
  const staticRoutes = [
    "",
    "/about-us",
    "/best-car-rental-in-chennai",
    "/blog",
    "/car-rent-for-marriage-in-delhi",
    "/careers",
    "/clients",
    "/corporate-car-rental-in-bangalore",
    "/corporate-car-rental-in-mumbai",
    "/corporate-car-rental-service",
    "/employee-transport-services",
    "/employee-transportation-services-in-bangalore",
    "/employee-transportation-services-in-chennai",
    "/employee-transportation-services-in-delhi",
    "/employee-transportation-services-in-gurgaon",
    "/employee-transportation-services-in-hyderabad",
    "/employee-transportation-services-in-kolkata",
    "/employee-transportation-services-in-mumbai",
    "/employee-transportation-services-in-pune",
    "/gallery",
    "/our-journey",
    "/outstation-cabs-in-bangalore",
    "/outstation-cabs-in-chennai",
    "/outstation-cabs-in-delhi",
    "/outstation-cabs-in-gurgaon",
    "/outstation-cabs-in-hyderabad",
    "/outstation-cabs-in-mumbai",
    "/outstation-cabs-in-pune",
    "/outstation-rides",
    "/premium-car-rentals",
    "/privacy-policy",
    "/reach-us",
    "/services-offered",
    "/shutle-services-in-pune",
    "/shuttle-service",
    "/shuttle-service-in-bangalore",
    "/shuttle-service-in-delhi",
    "/shuttle-service-in-gurgaon",
    "/shuttle-services-in-chennai",
    "/shuttle-services-in-hyderabad",
    "/shuttle-services-in-mumbai",
    "/terms-and-conditions",
    "/wedding-car-rental-in-chennai",
    "/wedding-car-rental-mumbai",
    "/wedding-cars",
    "/wedding-cars-in-bangalore",
    "/wedding-cars-in-hyderabad",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
