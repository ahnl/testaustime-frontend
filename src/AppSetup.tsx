import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from "@mantine/core";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuthentication from "./hooks/UseAuthentication";
import { ModalsProvider } from "@mantine/modals";
import TypesafeI18n from "./i18n/i18n-react";
import { loadAllLocales } from "./i18n/i18n-util.sync";
import { useSettings } from "./hooks/useSettings";
import {
  detectLocale, htmlLangAttributeDetector, navigatorDetector, queryStringDetector
} from "typesafe-i18n/detectors";
import { App } from "./components/App";

loadAllLocales();
const detectedLanguage = detectLocale("en", ["en", "fi"],
  queryStringDetector,
  navigatorDetector,
  htmlLangAttributeDetector
);

export const AppSetup = () => {
  const { logOut, refetchUsername } = useAuthentication();
  const navigate = useNavigate();

  // Save colorScheme to localStorage and the default value is the preferred colorScheme
  const preferredColorScheme = useColorScheme();

  const [savedColorScheme, setColorScheme] = useLocalStorage<
    ColorScheme | "none"
  >({
    key: "testaustime-color-scheme",
    defaultValue: "none"
  });

  const { language } = useSettings();

  const colorScheme =
    savedColorScheme === "none" ? preferredColorScheme : savedColorScheme;

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  useEffect(() => {
    refetchUsername().catch(e => console.error(e));
  }, []);

  const logOutAndRedirect = () => {
    logOut();
    navigate("/");
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme: colorScheme,
          fontFamily: "Ubuntu, sans-serif",
          white: "#eee",
          black: "#121212",
          colors: {
            blue: [
              "#1D357F",
              "#28408A",
              "#667bc4",
              "#3D55A0",
              "#5084cc",
              "#536AB7",
              "#5E74C2",
              "#667bc4",
              "#6275bc",
              "#7E94E3"
            ]
          },
          headings: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            sizes: {
              h1: { fontSize: "1.9rem" },
              h2: { fontSize: "1.65rem" },
              h3: { fontSize: "1.4rem" }
            }
          },
          breakpoints: {
            md: 860
          }
        }}
      >
        <TypesafeI18n locale={language ?? detectedLanguage ?? "en"} key={language ?? detectedLanguage ?? "en"}>
          <NotificationsProvider>
            <ModalsProvider>
              <App
                logOutAndRedirect={logOutAndRedirect}
                toggleColorScheme={toggleColorScheme}
              />
            </ModalsProvider>
          </NotificationsProvider>
        </TypesafeI18n>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
