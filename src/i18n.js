import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: {
                translation: {
                    "special": "Maxsus imkoniyatlar"
                }
            },

            kr: {
                translation: {
                    "special": "Arnawli  imkoniyatlar"
                }
            },
            ru: {
                translation: {
                    "special": "Сп вожмож"
                }
            },

            en: {
                translation: {
                    "special": "Special functions"
                }
            }
        }
    })
export default i18next