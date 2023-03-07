I den här övningen skall du utveckla en headless inloggningssida.

Dvs du skall skapa en express API som hanterar inloggningslogiken.

Samt en frontend applikation med ett enkelt inloggningsformulär.

Du skall utveckla ett API (Med express js) som du kan anropa från front end applikationen (Fetch) som skickar namn och lösenord till en route på servern.

Skapa flera användare till ett object array (global array) på servern så att du kan logga in med olika användare. Varje användare skall ha ett unikt ID.

En global variabel “lever” på servern så länge servern inte startas om eller krachar pga av ett fel.

Globala variabler som innehåller data som är klient (knutet till besökaren) bör alldrig hanteras på detta sättet, eller viktig data som inte får förloras när servern startar om.

Men för övningens skull kan vi hantera användarna på detta sätt för nu.

Servern skall sedan kolla om det är en korrekt inloggning och i så fall svara med användarens ID, spara detta i localStorage på klienten. Vid felaktig inloggning skall en error skickas tillbaka.
