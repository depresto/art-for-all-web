import formData from 'form-data'
import Mailgun from 'mailgun.js'

class MgService {
  client
  isValid = false
  constructor() {
    const mailgun = new Mailgun(formData)
    const mailgunApiKey = process.env.MAILGUN_API_KEY
    this.client = mailgun.client({
      username: 'api',
      key: mailgunApiKey ?? '',
    })
    this.isValid = Boolean(mailgunApiKey) && Boolean(process.env.MAILGUN_DOMAIN)
  }
  send = async (data: any) => {
    return this.client?.messages.create(process.env.MAILGUN_DOMAIN || '', data)
  }
}

export default MgService
