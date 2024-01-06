import NextAuth from "next-auth"
import VkProvider from "next-auth/providers/vk"
const handler = NextAuth({ 
    providers: [
        VkProvider({
          clientId: process.env.VK_CLIENT_ID,
          clientSecret: process.env.VK_CLIENT_SECRET
        })
      ]
})

export { handler as GET, handler as POST }