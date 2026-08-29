# RoomPulse – ferdig GitHub Pages-nettside

Denne mappen inneholder en ferdig, statisk nettside for RoomPulse. Den kan publiseres gratis med GitHub Pages uten byggverktøy, server eller database.

## Innhold

- `index.html` – norsk forside
- `support.html` – norsk støtte
- `privacy.html` – norsk personvernerklæring
- `privacy-choices.html` – norsk veiledning for sletting og personvernvalg
- `en/` – engelske sider
- `es/` – spanske sider
- `assets/` – design, appikon, JavaScript og konfigurasjon
- `.nojekyll` – sikrer at GitHub Pages serverer filene direkte
- `START_HER.txt` – enkel publiseringsveiledning på norsk

## Publisert konfigurasjon

`assets/site-config.js` bruker følgende bekreftede utgiveropplysninger:

```javascript
window.ROOMPULSE_SITE = {
  developerName: "Lars Ask",
  supportEmail: "lars.ask@outlook.com",
  appStoreUrl: "",
  effectiveDate: {
    nb: "29. august 2026",
    en: "29 August 2026",
    es: "29 de agosto de 2026"
  }
};
```

`appStoreUrl` står tom frem til Apple har publisert appen. Da vises «Kommer snart» på nettsiden. Når App Store-lenken er klar, legges den inn i en ny commit.

## Anbefalt GitHub Pages-oppsett

1. Opprett et offentlig repository med navnet `roompulse-site`.
2. Last opp innholdet i denne mappen til roten av repositoryet.
3. Gå til **Settings → Pages**.
4. Velg **Deploy from a branch**.
5. Velg **main** og **/(root)**.
6. Lagre.

Nettsiden vil deretter ligge på:

```text
https://lars12345678911.github.io/roompulse-site/
```

## App Store Connect-adresser

```text
Marketing URL:
https://lars12345678911.github.io/roompulse-site/

Support URL:
https://lars12345678911.github.io/roompulse-site/support.html

Privacy Policy URL:
https://lars12345678911.github.io/roompulse-site/privacy.html

Optional Privacy Choices URL:
https://lars12345678911.github.io/roompulse-site/privacy-choices.html
```

Lokaliserte sider finnes under `/en/` og `/es/`.

## Teknisk

Nettsiden bruker bare HTML, CSS og litt JavaScript. Den laster ikke inn eksterne fonter, annonsebiblioteker eller analyseverktøy. Alle lenker er relative, slik at repositoryet kan ha et annet navn enn `roompulse-site` dersom ønskelig.
