import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event)

  const { name, phone } = body

  const transporter = nodemailer.createTransport({
    host: config.server.emailHost,
    port: config.server.emailPort,
    secure: false,
    auth: {
      user: config.server.emailAuthUser,
      pass: config.server.emailAuthPass
    }
  })

  try {
    await transporter.sendMail({
      from: `Client <${config.server.emailAuthUser}>`,
      to: config.server.emailAuthUser,
      subject: 'Нова заявка з сайту',
      text: `Name: ${name}\nphone: ${phone}`
    })

    return { message: 'Заявка успішно відправлена!' }
  } catch (err) {
    console.error(err)
    throw createError({
      statusCode: 500,
      message: "Не вдалося відправити лист. Перевір SMTP.",
    })
  }
})
