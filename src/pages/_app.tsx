import type { AppProps } from 'next/app'
import { NextRouter, useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import '@/assets/styles/app.scss'
import '@/assets/styles/main.scss'
import { queryClient } from '@/config/api/reactQueryConfig'
import * as locales from '@/public/local'
import { QueryClientProvider } from '@tanstack/react-query'

const defaultMarket = process.env.DEFAULT_MARKET || 'en'

function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter()
  const { locale = defaultMarket, defaultLocale } = router
  const messages = locales[locale as keyof typeof locales]

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </IntlProvider>
  )
}

export default App
