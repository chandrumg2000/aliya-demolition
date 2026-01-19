export function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "DemolitionContractor",
        "name": "Aliya Demolition Services",
        "image": "https://aliyademolition.com/og-image.jpg",
        "@id": "https://aliyademolition.com",
        "url": "https://aliyademolition.com",
        "telephone": "+919876543210",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "No. 123, Industrial Estate, Guindy",
            "addressLocality": "Chennai",
            "addressRegion": "TN",
            "postalCode": "600032",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 13.0067,
            "longitude": 80.2206
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "08:00",
            "closes": "20:00"
        },
        "priceRange": "₹₹",
        "sameAs": [
            "https://facebook.com/aliyamentiolition",
            "https://instagram.com/aliyademolition"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
