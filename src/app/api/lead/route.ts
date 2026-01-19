import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic Honeypot Check (if implemented in frontend)
        // if (body._honey) {
        //   return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
        // }

        // Validate required fields
        if (!body.name || !body.phone || !body.service) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const lead = {
            id: Date.now().toString(),
            submittedAt: new Date().toISOString(),
            ...body,
        };

        // Define path for local storage
        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'leads.json');

        // Ensure directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Read existing leads
        let leads = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                leads = JSON.parse(fileContent);
            } catch (e) {
                console.error('Error parsing leads file:', e);
            }
        }

        // Add new lead
        leads.push(lead);

        // Save back to file
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

        return NextResponse.json({ success: true, message: 'Lead saved successfully' });
    } catch (error) {
        console.error('Lead submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
