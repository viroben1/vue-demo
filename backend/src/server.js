// require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser')
const cors = require('cors')
// eslint-disable-next-line no-unused-vars
const axios = require('axios')
const stripeClient = require('stripe')(process.env.STRIPE_SECRET_KEY)
// const stripe = new Stripe(process.env.SECRET_KEY);
// const stripe = require('@stripe/stripe-js')

const app = express()
const port = 3000

// Rest of your code remains unchanged

// const stripePrivateKey = process.env.STRIPE_PRIVATE_KEY
// const stripeClient = stripe(stripePrivateKey)

const contentData = {
  '/about': 'Content for the About page',
  '/flag': 'Content for the Flag page'
}
const generatePageData = (pageName) => {
  return {
    title: `${pageName} Title`,
    welcomeMessage: `Welcome to the ${pageName} page.`
    // Add other properties as needed
  }
}
const aboutContent = {
  about: {
    title: 'About the International Flag of Peace',
    welcomeMessage:
      'Welcome to the International Flag of Peace project. Our mission is to promote peace, unity, kindness, and tolerance among people from all walks of life, and every place in the world. This flag represents our commitment to a world where love, understanding, and compassion prevail.',
    storyTitle: 'The Story Behind the Flag',
    story:
      "When the 9-11 attack happened, our visionary, Camille, felt a deep calling to create a symbol of peace that could belong to everyone living on this beautiful planet. That moment led to this journey of crafting the 'International Flag of Peace.'",
    messageTitle: 'Our Message',
    message:
      "The flag's colors and elements symbolize the core values of people everywhere. The blue represents peace, the green stands for harmony with nature and with each other, and the white symbolizes unity. Yellow is the sun, which is lighting our way each day; the heart, doves, and olive branches are the symbols of love. We believe in a world where kindness and charity prevail among our brothers and sisters everywhere.",
    involvedTitle: 'Get Involved',
    involvedMessage:
      "If you resonate with our mission, we invite you to join us in promoting peace and spreading the message of the 'International Flag of Peace.' Together, we can make our beautiful world a more peaceful place to live and thrive."
  }
}
const policyPages = {
  'terms-conditions': {
    pageTitle: 'Terms  Conditions',
    pageContent: `
          By accessing and using our services, you agree to be bound by our Terms and Conditions. Please read these terms
          carefully before using our platform. You agree to use our services in compliance with these terms and all applicable
          laws and regulations. Do not use our services if you do not agree with these terms. All content on our platform,
          including text, graphics, logos, and images, is our property and is protected by intellectual property laws.
        `
  },
  'privacy-policy': {
    pageTitle: 'Privacy Policy',
    pageContent: `
          'Our privacy policy outlines how we collect, use, and protect your personal information when you use our services.
          We are committed to safeguarding your privacy and ensuring the confidentiality of your information. Please review
          our privacy policy carefully to understand how your data is handled.
        `
  },
  'refund-policy': {
    pageTitle: 'Refund Policy',
    pageContent: `
          Our refund policy applies to purchases made through our platform. We strive to provide excellent service, but if
          you're not completely satisfied with your purchase, you may be eligible for a refund or exchange. To be eligible
          for a refund, your request must meet certain criteria, including the date of purchase and the condition of the item.
          If you meet the eligibility criteria, please contact our customer support team to initiate a refund request.
        `
  },
  'delivery-policy': {
    pageTitle: 'Delivery Policy',
    pageContent: `
          Our delivery policy outlines the terms and conditions for the delivery of products purchased through our platform.
          We aim to provide timely and secure delivery services to our customers. Delivery times may vary based on your location
          and product availability. We make every effort to deliver products within the estimated delivery timeframes.
          Delivery charges may apply based on the shipping method and destination. These charges will be clearly displayed
          at the time of purchase.
        `
  }
  // Add more policy pages as needed...
}

// Enable CORS for all routes
app.use(cors())

// Function to generate page data based on page name

app.get('/api/pages/:pageName', (req, res) => {
  const { pageName } = req.params

  // Check if the page exists in aboutContent
  if (aboutContent[pageName]) {
    res.json(aboutContent[pageName])
  } else {
    // Generate default page data if not found in specific content
    const pageData = generatePageData(pageName)

    // Use existing logic for other pages
    if (pageData[pageName]) {
      res.json(pageData[pageName])
    } else if (policyPages[pageName]) {
      res.json(policyPages[pageName])
    } else {
      res.status(404).json({ error: 'Page not found' })
    }
  }
})

app.get('/api/pages/terms-conditions', (req, res) => {
  const TermsConditionsContent = {
    pageTitle: 'Terms  Conditions',
    pageContent: `
      By accessing and using our services, you agree to be bound by our Terms and Conditions. Please read these terms
      carefully before using our platform. You agree to use our services in compliance with these terms and all applicable
      laws and regulations. Do not use our services if you do not agree with these terms. All content on our platform,
      including text, graphics, logos, and images, is our property and is protected by intellectual property laws.
    `
  }
  res.json(TermsConditionsContent)
})

app.get('/api/pages/privacy-policy', (req, res) => {
  const privacyPolicy = {
    pageTitle: 'Privacy Policy',
    pageContent: `
      'Our privacy policy outlines how we collect, use, and protect your personal information when you use our services.
      We are committed to safeguarding your privacy and ensuring the confidentiality of your information. Please review
      our privacy policy carefully to understand how your data is handled.
    `
  }
  res.json(privacyPolicy)
})

app.get('/api/pages/refund-policy', (req, res) => {
  const refundPolicy = {
    pageTitle: 'Refund Policy',
    pageContent: `
      Our refund policy applies to purchases made through our platform. We strive to provide excellent service, but if
      you're not completely satisfied with your purchase, you may be eligible for a refund or exchange. To be eligible
      for a refund, your request must meet certain criteria, including the date of purchase and the condition of the item.
      If you meet the eligibility criteria, please contact our customer support team to initiate a refund request.
    `
  }
  res.json(refundPolicy)
})

// Update the /api/pages/delivery-policy route
app.get('/api/pages/delivery-policy', (req, res) => {
  const deliveryPolicy = {
    pageTitle: 'Delivery Policy',
    pageContent: `
      Our delivery policy outlines the terms and conditions for the delivery of products purchased through our platform.
      We aim to provide timely and secure delivery services to our customers. Delivery times may vary based on your location
      and product availability. We make every effort to deliver products within the estimated delivery timeframes.
      Delivery charges may apply based on the shipping method and destination. These charges will be clearly displayed
      at the time of purchase.
    `
  }
  res.json(deliveryPolicy)
})

app.get('/api/dynamicData', (req, res) => {
  const dynamicData = {
    pageTitle: 'Dynamic Page Title',
    pageContent: 'This is dynamic content for the AppNavbar.'
  }
  res.json(dynamicData)
})

app.get('/api/common-content', (req, res) => {
  const commonContent = {
    title: 'About the International Flag of Peace (from Backend)',
    content:
      'Welcome to the International Flag of Peace project. Our mission is to promote peace, unity, and kindness among people from all walks of life, and every place in the world. This flag represents our commitment to a world where love, understanding, and compassion prevail.'
  }
  res.json(commonContent)
})

app.get('/api/flag', (req, res) => {
  const flagContent = {
    flagPageContent: `
        My name is Camille. I am a peaceful soul, driven by the profound belief that a more harmonious world is not just a dream but an achievable reality.
        I envision a world characterized by unwavering kindness, compassion, and unity among all the diverse inhabitants of this beautiful planet.
  
        In the wake of the tragic 9/11 attack, I felt an even stronger calling within me to embark on a pathway to share this message of Peace.
        It was a resolute conviction that the people of our Earth needed a symbol, a flag, that could serve as a universal emblem of peace and hope.
        I envisioned a flag that transcended borders, languages, and cultures. A flag that belongs to every individual residing on this extraordinary planet.
  
        It was in that moment of clarity that a quiet yet resolute voice within me whispered, 'Why not? It's up to you.'
        And with that divine encouragement, I embarked on an inspiring journey to bring into existence the 'International Flag of Peace.'
  
        This mission statement is more than just a symbol; it's a testament to the power of shared values and our collective commitment to peace.
        It represents our unwavering dedication to creating a world where love, understanding, compassion and unity prevail.
        It is a reminder that peace is not an abstract concept. It is a choice we make every day.
  
        The 'International Flag of Peace' is a call to action, a call for individuals from all walks of life to come together, work together,
        and build a world that we can proudly pass on to future generations. It is a symbol of our shared humanity and our shared responsibility
        to create a better world for all.
      `,
    flagImageUrl: '/assets/Camille Yogi - Flag - Int Flag of Peace.png'
  }
  res.json(flagContent)
})

app.get('/api/data', (req, res) => {
  const backendData = {
    message: ''
  }
  res.json(backendData)
})

app.get('/api/about', (req, res) => {
  const aboutContent = {
    title: 'About the International Flag of Peace',
    welcomeMessage:
      'Welcome to the International Flag of Peace project. Our mission is to promote peace, unity, kindness, and tolerance among people from all walks of life, and every place in the world. This flag represents our commitment to a world where love, understanding, and compassion prevail.',
    storyTitle: 'The Story Behind the Flag',
    story:
      "When the 9-11 attack happened, our visionary, Camille, felt a deep calling to create a symbol of peace that could belong to everyone living on this beautiful planet. That moment led to this journey of crafting the 'International Flag of Peace.'",
    messageTitle: 'Our Message',
    message:
      "The flag's colors and elements symbolize the core values of people everywhere. The blue represents peace, the green stands for harmony with nature and with each other, and the white symbolizes unity. Yellow is the sun, which is lighting our way each day; the heart, doves, and olive branches are the symbols of love. We believe in a world where kindness and charity prevail among our brothers and sisters everywhere.",
    involvedTitle: 'Get Involved',
    involvedMessage:
      "If you resonate with our mission, we invite you to join us in promoting peace and spreading the message of the 'International Flag of Peace.' Together, we can make our beautiful world a more peaceful place to live and thrive."
  }

  res.json(aboutContent)
})

app.get('/api/mission', (req, res) => {
  const missionText =
    'Our mission is to spread awareness about the International Flag of Peace and to inspire acts of kindness and charity. ' +
    'We believe in creating a world where love, understanding, and compassion prevail. Join us in promoting peace and making a positive impact in our global community.'
  res.json({ missionText })
})

app.get('/api/content/:routePath', (req, res) => {
  const { routePath } = req.params

  // Check if content exists for the given route path
  if (Object.prototype.hasOwnProperty.call(contentData, routePath)) {
    const dynamicContent = contentData[routePath]
    res.json({ content: dynamicContent })
  } else {
    res.status(404).json({ error: 'Content not found' })
  }
})

app.get('/api/last-updated', (req, res) => {
  const lastUpdatedDate = new Date().toDateString() // Replace this with your logic to get the actual last updated date
  res.json({ lastUpdatedDate })
})
// Add more API routes as needed...
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body

  try {
    // Create a payment intent using the stripeClient
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount,
      currency
    })

    // Send the client secret to the front end
    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    res.status(500).send({ error: 'Failed to create payment intent' })
  }
})
app.post('/stripe/webhook', express.raw({ type: 'application/json' }), async (request, response) => {
  const sig = request.headers['stripe-signature']

  let event

  try {
    event = stripeClient.webhooks.constructEvent(request.body, sig, process.env.END_POINT_SECRET)
    //   console.log("type", event);
  } catch (err) {
    //   console.log("type2", err);
    response.status(400).send(`Webhook Error: ${err.message}`)
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      // eslint-disable-next-line no-case-declarations, no-unused-vars
      const paymentIntent = event.data.object
      console.log('PaymentIntent was successful!')
      break
    case 'payment_method.attached':
      // eslint-disable-next-line no-case-declarations, no-unused-vars
      const paymentMethod = event.data.object
      console.log('PaymentMethod was attached to a Customer!')
      break
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  // Return a response to acknowledge receipt of the event
  response.json({ received: true })
})
const usdProperties = { currency: 'usd', baseUnit: 'cents', baseUnitValue: 1 / 100 }
/** @type {{id,description,itemCode,amount}[]} */
const inventory = [
  { id: 1, description: 'flag1', itemCode: 'flag', amount: 10_00, ...usdProperties },
  { id: 2, description: 'flag2', itemCode: 'flag', amount: 20_00, ...usdProperties },
  { id: 3, description: 'flag3', itemCode: 'flag', amount: 30_00, ...usdProperties },
  { id: 4, description: 'flag4', itemCode: 'flag', amount: 40_00, ...usdProperties },
  { id: 5, description: 'flag5', itemCode: 'flag', amount: 50_00, ...usdProperties },
  { id: 6, description: 'flag6', itemCode: 'flag', amount: 60_00, ...usdProperties }
]

app.use(express.json())

app.get('api/inventory', (req, res) => res.json({ data: inventory }))

app.post('/stripe', async (request, response) => {
  const { items } = request.body
  // Should calculate server side
  const itemPrices = /** @type {{id,count}[]} */ (items).map((item) => {
    const invItem = inventory.find((qItem) => qItem.id === item.id)
    //total price = amount * quantity
    const totalPrice = invItem.amount * item.count
    return totalPrice
  })

  const totalAmount = itemPrices.reduce((prev, acc) => acc + prev, 0)

  try {
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: totalAmount,
      currency: 'usd'
    })

    response.status(200).send({ secret: paymentIntent.client_secret })
  } catch (error) {
    console.log('error', error)
    response.status(500).send('error' + error)
  }
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
