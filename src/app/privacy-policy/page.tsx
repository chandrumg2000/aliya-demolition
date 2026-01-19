import { PageHeader } from "@/components/ui/PageHeader"

export default function PrivacyPolicyPage() {
    return (
        <>
            <PageHeader title="Privacy Policy" />
            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl prose prose-slate">
                    <h3>1. Introduction</h3>
                    <p>Aliya Demolition ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>

                    <h3>2. Information We Collect</h3>
                    <p>We may collect personal information such as your name, phone number, email address, and location when you fill out our contact forms or request a quote.</p>

                    <h3>3. How We Use Your Information</h3>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide and improve our services.</li>
                        <li>Respond to your inquiries and quote requests.</li>
                        <li>Communicate with you about updates or offers.</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>

                    <h3>5. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at info@aliyademolition.com.</p>
                </div>
            </section>
        </>
    )
}
