import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = contactSchema.parse(body)

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, or AWS SES
    // 2. Store in database
    // 3. Send to CRM or Slack

    // For now, we'll just log it
    console.log('Contact form submission:', { name, email, message })

    // Simulate sending email
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}