let webdesignQuestions = [
  {
    "question": "Was ist der Hauptunterschied zwischen 'display: none' und 'visibility: hidden' in CSS?",
    "answer_1": "'display: none' entfernt das Element vollständig aus dem Layout, 'visibility: hidden' lässt es im Layout aber unsichtbar bleiben",
    "answer_2": "'visibility: hidden' entfernt das Element vollständig, 'display: none' lässt es im Layout",
    "answer_3": "'display: none' macht das Element sichtbar, 'visibility: hidden' versteckt es",
    "answer_4": "Es gibt keinen Unterschied",
    "right_answer": "1"
  },
  {
    "question": "Welche CSS-Eigenschaft wird verwendet, um die Reihenfolge von flexiblen Elementen in einem flex-container zu ändern?",
    "answer_1": "order",
    "answer_2": "flex-direction",
    "answer_3": "justify-content",
    "answer_4": "align-items",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet der Begriff 'responsive web design'?",
    "answer_1": "Ein Design, das sich an verschiedene Bildschirmgrößen und Geräte anpasst",
    "answer_2": "Ein Design, das nur auf Desktop-Geräten funktioniert",
    "answer_3": "Ein Design, das nur für Mobilgeräte optimiert ist",
    "answer_4": "Ein Design, das keine CSS-Medienabfragen benötigt",
    "right_answer": "1"
  },
  {
    "question": "Was ist die Funktion der CSS-Eigenschaft 'align-items' im Zusammenhang mit Flexbox?",
    "answer_1": "Sie steuert die horizontale Ausrichtung der Elemente",
    "answer_2": "Sie steuert die vertikale Ausrichtung der Elemente",
    "answer_3": "Sie steuert den Abstand zwischen den Elementen",
    "answer_4": "Sie ändert die Reihenfolge der Elemente",
    "right_answer": "2"
  },
  {
    "question": "Was bewirkt die CSS-Eigenschaft 'text-transform'?",
    "answer_1": "Sie ändert die Schriftfarbe",
    "answer_2": "Sie transformiert den Text (z. B. in Großbuchstaben, Kleinbuchstaben)",
    "answer_3": "Sie ändert die Schriftgröße",
    "answer_4": "Sie macht den Text fett",
    "right_answer": "2"
  },
  {
    "question": "Welche HTML5-Eigenschaft wird verwendet, um das Laden von externen Skripten zu verzögern?",
    "answer_1": "async",
    "answer_2": "defer",
    "answer_3": "load",
    "answer_4": "script-type",
    "right_answer": "2"
  },
  {
    "question": "Was bedeutet der Begriff 'Cross-Site Scripting (XSS)'?",
    "answer_1": "Ein Angriff, bei dem Angreifer JavaScript in eine Website einfügen, um schadhafter Code auszuführen",
    "answer_2": "Eine Methode, um Webinhalte schnell zu rendern",
    "answer_3": "Ein Verfahren zur Verbesserung der Website-Geschwindigkeit",
    "answer_4": "Ein neues Webentwicklungstool",
    "right_answer": "1"
  },
  {
    "question": "Welches der folgenden HTML-Elemente wird verwendet, um ein Video einzubetten?",
    "answer_1": "<video>",
    "answer_2": "<embed>",
    "answer_3": "<object>",
    "answer_4": "<media>",
    "right_answer": "1"
  },
  {
    "question": "Was ist der Zweck des 'alt'-Attributs in einem <img>-Tag?",
    "answer_1": "Es gibt eine Beschreibung des Bildes für Screenreader und Suchmaschinen",
    "answer_2": "Es legt die Größe des Bildes fest",
    "answer_3": "Es fügt einen Link zum Bild hinzu",
    "answer_4": "Es verändert die Bildfarbe",
    "right_answer": "1"
  },
  {
    "question": "Was ist die Bedeutung von 'min-width' in einer CSS-Medienabfrage?",
    "answer_1": "Es gibt die minimale Breite an, bei der bestimmte CSS-Regeln angewendet werden",
    "answer_2": "Es definiert die maximale Breite des Viewports",
    "answer_3": "Es bewirkt, dass die Seite bei einer bestimmten Breite des Bildschirms nicht mehr skaliert wird",
    "answer_4": "Es wird verwendet, um die Schriftgröße zu ändern",
    "right_answer": "1"
  },
  {
    "question": "Was ist 'CSS Grid'?",
    "answer_1": "Ein Layout-System, das auf einem rasterbasierten Ansatz basiert",
    "answer_2": "Ein Werkzeug zur Erstellung von responsiven Websites",
    "answer_3": "Eine CSS-Eigenschaft zur Textformatierung",
    "answer_4": "Ein HTML-Tag für Layouts",
    "right_answer": "1"
  },
  {
    "question": "Wie fügt man in HTML ein externes Stylesheet ein?",
    "answer_1": "<link rel='stylesheet' href='styles.css'>",
    "answer_2": "<script src='styles.css'></script>",
    "answer_3": "<style src='styles.css'></style>",
    "answer_4": "<css src='styles.css'></css>",
    "right_answer": "1"
  },
  {
    "question": "Was ist der Zweck der CSS-Eigenschaft 'opacity'?",
    "answer_1": "Sie steuert die Transparenz eines Elements",
    "answer_2": "Sie ändert die Schriftfarbe eines Elements",
    "answer_3": "Sie fügt einem Element Schatten hinzu",
    "answer_4": "Sie verändert die Größe eines Elements",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet der Begriff 'Semantic HTML'?",
    "answer_1": "HTML, das die Struktur und Bedeutung der Inhalte klar und verständlich beschreibt",
    "answer_2": "HTML, das nur für Suchmaschinenoptimierung verwendet wird",
    "answer_3": "HTML, das keine Formatierungen enthält",
    "answer_4": "HTML ohne Verwendung von CSS",
    "right_answer": "1"
  },
  {
    "question": "Wie kann man in CSS eine Animation erstellen?",
    "answer_1": "Mit der 'animation'-Eigenschaft",
    "answer_2": "Mit der 'transform'-Eigenschaft",
    "answer_3": "Mit der 'transition'-Eigenschaft",
    "answer_4": "Mit der 'motion'-Eigenschaft",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet der Begriff 'Box-Modell' in CSS?",
    "answer_1": "Es beschreibt die Darstellung eines Elements mit Inhalt, Padding, Border und Margin",
    "answer_2": "Es beschreibt die Art und Weise, wie CSS-Eigenschaften angewendet werden",
    "answer_3": "Es beschreibt das Layout von Flexbox-Elementen",
    "answer_4": "Es beschreibt die Darstellung von Hintergrundbildern",
    "right_answer": "1"
  },
  {
    "question": "Welche Eigenschaft wird verwendet, um einen Hintergrund in CSS zu wiederholen?",
    "answer_1": "background-repeat",
    "answer_2": "background-size",
    "answer_3": "background-position",
    "answer_4": "background-color",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet die Eigenschaft 'z-index' in CSS?",
    "answer_1": "Sie steuert die Stapelreihenfolge von Elementen",
    "answer_2": "Sie definiert die Größe eines Elements",
    "answer_3": "Sie bestimmt, wie schnell ein Element angezeigt wird",
    "answer_4": "Sie ändert die Farbe des Elements",
    "right_answer": "1"
  },
  {
    "question": "Was ist der Zweck von 'media queries' in CSS?",
    "answer_1": "Sie ermöglichen es, unterschiedliche Stile je nach Bildschirmgröße anzuwenden",
    "answer_2": "Sie fügen Medieninhalte auf der Seite hinzu",
    "answer_3": "Sie integrieren verschiedene Dateiformate in HTML",
    "answer_4": "Sie steuern die Animationen auf der Seite",
    "right_answer": "1"
  },
  {
    "question": "Wie wird ein Button in HTML erstellt?",
    "answer_1": "<button>Text</button>",
    "answer_2": "<input type='button' value='Text'>",
    "answer_3": "<div class='button'>Text</div>",
    "answer_4": "<a href='#' class='button'>Text</a>",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet der Begriff 'Progressive Enhancement'?",
    "answer_1": "Die Praxis, eine Basisversion einer Website zu erstellen, die auf allen Geräten funktioniert, und dann erweiterte Funktionen für fortschrittlichere Geräte hinzuzufügen",
    "answer_2": "Die Praxis, Websites für Desktop-Computer zu optimieren und dann auf mobile Geräte zu erweitern",
    "answer_3": "Die Praxis, animierte Websites zu erstellen",
    "answer_4": "Die Praxis, alle Geräte gleich zu behandeln",
    "right_answer": "1"
  },
  {
    "question": "Was ist die Funktion von 'normalize.css'?",
    "answer_1": "Es setzt alle Standard-Stile auf allen Browsern zurück, um ein einheitliches Design zu gewährleisten",
    "answer_2": "Es fügt Standard-Stile für alle Elemente hinzu",
    "answer_3": "Es optimiert das Layout für mobile Geräte",
    "answer_4": "Es fügt eine CSS-Animation hinzu",
    "right_answer": "1"
  },
  {
    "question": "Was ist die Bedeutung des 'viewport'-Metatags?",
    "answer_1": "Es steuert das Layout auf mobilen Geräten",
    "answer_2": "Es fügt ein Bild in die Seite ein",
    "answer_3": "Es definiert die Schriftgröße auf mobilen Geräten",
    "answer_4": "Es ändert die Hintergrundfarbe auf mobilen Geräten",
    "right_answer": "1"
  },
  {
    "question": "Welche CSS-Eigenschaft wird verwendet, um den Abstand zwischen den Wörtern zu verändern?",
    "answer_1": "word-spacing",
    "answer_2": "letter-spacing",
    "answer_3": "line-height",
    "answer_4": "text-indent",
    "right_answer": "1"
  },
  {
    "question": "Wie kann man in CSS den Text zentrieren?",
    "answer_1": "Mit der 'text-align'-Eigenschaft",
    "answer_2": "Mit der 'align-items'-Eigenschaft",
    "answer_3": "Mit der 'justify-content'-Eigenschaft",
    "answer_4": "Mit der 'vertical-align'-Eigenschaft",
    "right_answer": "1"
  },
  {
    "question": "Was ist das 'Favicon' einer Website?",
    "answer_1": "Ein kleines Symbol, das in der Browser-Adressleiste angezeigt wird",
    "answer_2": "Ein Hintergrundbild der Website",
    "answer_3": "Ein Teil des HTML-Codes",
    "answer_4": "Ein Video auf der Website",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet der Begriff 'responsive web design'?",
    "answer_1": "Ein Design, das sich an verschiedene Bildschirmgrößen und Geräte anpasst",
    "answer_2": "Ein Design, das nur auf Desktop-Geräten funktioniert",
    "answer_3": "Ein Design, das nur für Mobilgeräte optimiert ist",
    "answer_4": "Ein Design, das keine CSS-Medienabfragen benötigt",
    "right_answer": "1"
  },
  {
    "question": "Was ist die Funktion der CSS-Eigenschaft 'align-items' im Zusammenhang mit Flexbox?",
    "answer_1": "Sie steuert die horizontale Ausrichtung der Elemente",
    "answer_2": "Sie steuert die vertikale Ausrichtung der Elemente",
    "answer_3": "Sie steuert den Abstand zwischen den Elementen",
    "answer_4": "Sie ändert die Reihenfolge der Elemente",
    "right_answer": "2"
  },
  {
    "question": "Was bewirkt die CSS-Eigenschaft 'text-transform'?",
    "answer_1": "Sie ändert die Schriftfarbe",
    "answer_2": "Sie transformiert den Text (z. B. in Großbuchstaben, Kleinbuchstaben)",
    "answer_3": "Sie ändert die Schriftgröße",
    "answer_4": "Sie macht den Text fett",
    "right_answer": "2"
  },
  {
    "question": "Welche HTML5-Eigenschaft wird verwendet, um das Laden von externen Skripten zu verzögern?",
    "answer_1": "async",
    "answer_2": "defer",
    "answer_3": "load",
    "answer_4": "script-type",
    "right_answer": "2"
  },
  {
    "question": "Was bedeutet der Begriff 'Cross-Site Scripting (XSS)'?",
    "answer_1": "Ein Angriff, bei dem Angreifer JavaScript in eine Website einfügen, um schadhafter Code auszuführen",
    "answer_2": "Eine Methode, um Webinhalte schnell zu rendern",
    "answer_3": "Ein Verfahren zur Verbesserung der Website-Geschwindigkeit",
    "answer_4": "Ein neues Webentwicklungstool",
    "right_answer": "1"
  },
  {
    "question": "Welches der folgenden HTML-Elemente wird verwendet, um ein Video einzubetten?",
    "answer_1": "<video>",
    "answer_2": "<embed>",
    "answer_3": "<object>",
    "answer_4": "<media>",
    "right_answer": "1"
  },
  {
    "question": "Was ist der Zweck des 'alt'-Attributs in einem <img>-Tag?",
    "answer_1": "Es gibt eine Beschreibung des Bildes für Screenreader und Suchmaschinen",
    "answer_2": "Es legt die Größe des Bildes fest",
    "answer_3": "Es fügt einen Link zum Bild hinzu",
    "answer_4": "Es verändert die Bildfarbe",
    "right_answer": "1"
  },
  {
    "question": "Was ist die Bedeutung von 'min-width' in einer CSS-Medienabfrage?",
    "answer_1": "Es gibt die minimale Breite an, bei der bestimmte CSS-Regeln angewendet werden",
    "answer_2": "Es definiert die maximale Breite des Viewports",
    "answer_3": "Es bewirkt, dass die Seite bei einer bestimmten Breite des Bildschirms nicht mehr skaliert wird",
    "answer_4": "Es wird verwendet, um die Schriftgröße zu ändern",
    "right_answer": "1"
  },
  {
    "question": "Was ist 'CSS Grid'?",
    "answer_1": "Ein Layout-System, das auf einem rasterbasierten Ansatz basiert",
    "answer_2": "Ein Werkzeug zur Erstellung von responsiven Websites",
    "answer_3": "Eine CSS-Eigenschaft zur Textformatierung",
    "answer_4": "Ein HTML-Tag für Layouts",
    "right_answer": "1"
  },
  {
    "question": "Wie fügt man in HTML ein externes Stylesheet ein?",
    "answer_1": "<link rel='stylesheet' href='styles.css'>",
    "answer_2": "<script src='styles.css'></script>",
    "answer_3": "<style src='styles.css'></style>",
    "answer_4": "<css src='styles.css'></css>",
    "right_answer": "1"
  },
  {
    "question": "Was ist der Zweck der CSS-Eigenschaft 'opacity'?",
    "answer_1": "Sie steuert die Transparenz eines Elements",
    "answer_2": "Sie ändert die Schriftfarbe eines Elements",
    "answer_3": "Sie fügt einem Element Schatten hinzu",
    "answer_4": "Sie verändert die Größe eines Elements",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet der Begriff 'Semantic HTML'?",
    "answer_1": "HTML, das die Struktur und Bedeutung der Inhalte klar und verständlich beschreibt",
    "answer_2": "HTML, das nur für Suchmaschinenoptimierung verwendet wird",
    "answer_3": "HTML, das keine Formatierungen enthält",
    "answer_4": "HTML ohne Verwendung von CSS",
    "right_answer": "1"
  },
  {
    "question": "Wie kann man in CSS eine Animation erstellen?",
    "answer_1": "Mit der 'animation'-Eigenschaft",
    "answer_2": "Mit der 'transform'-Eigenschaft",
    "answer_3": "Mit der 'transition'-Eigenschaft",
    "answer_4": "Mit der 'motion'-Eigenschaft",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet der Begriff 'Box-Modell' in CSS?",
    "answer_1": "Es beschreibt die Darstellung eines Elements mit Inhalt, Padding, Border und Margin",
    "answer_2": "Es beschreibt die Art und Weise, wie CSS-Eigenschaften angewendet werden",
    "answer_3": "Es beschreibt das Layout von Flexbox-Elementen",
    "answer_4": "Es beschreibt die Darstellung von Hintergrundbildern",
    "right_answer": "1"
  },
  {
    "question": "Welche Eigenschaft wird verwendet, um einen Hintergrund in CSS zu wiederholen?",
    "answer_1": "background-repeat",
    "answer_2": "background-size",
    "answer_3": "background-position",
    "answer_4": "background-color",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet die Eigenschaft 'z-index' in CSS?",
    "answer_1": "Sie steuert die Stapelreihenfolge von Elementen",
    "answer_2": "Sie definiert die Größe eines Elements",
    "answer_3": "Sie bestimmt, wie schnell ein Element angezeigt wird",
    "answer_4": "Sie ändert die Farbe des Elements",
    "right_answer": "1"
  },
  {
    "question": "Was ist der Zweck von 'media queries' in CSS?",
    "answer_1": "Sie ermöglichen es, unterschiedliche Stile je nach Bildschirmgröße anzuwenden",
    "answer_2": "Sie fügen Medieninhalte auf der Seite hinzu",
    "answer_3": "Sie integrieren verschiedene Dateiformate in HTML",
    "answer_4": "Sie steuern die Animationen auf der Seite",
    "right_answer": "1"
  },
  {
    "question": "Wie wird ein Button in HTML erstellt?",
    "answer_1": "<button>Text</button>",
    "answer_2": "<input type='button' value='Text'>",
    "answer_3": "<div class='button'>Text</div>",
    "answer_4": "<a href='#' class='button'>Text</a>",
    "right_answer": "1"
  },
  {
    "question": "Was bedeutet der Begriff 'Progressive Enhancement'?",
    "answer_1": "Die Praxis, eine Basisversion einer Website zu erstellen, die auf allen Geräten funktioniert, und dann erweiterte Funktionen für fortschrittlichere Geräte hinzuzufügen",
    "answer_2": "Die Praxis, Websites für Desktop-Computer zu optimieren und dann auf mobile Geräte zu erweitern",
    "answer_3": "Die Praxis, animierte Websites zu erstellen",
    "answer_4": "Die Praxis, alle Geräte gleich zu behandeln",
    "right_answer": "1"
  },
  {
    "question": "Was ist die Funktion von 'normalize.css'?",
    "answer_1": "Es setzt alle Standard-Stile auf allen Browsern zurück, um ein einheitliches Design zu gewährleisten",
    "answer_2": "Es fügt Standard-Stile für alle Elemente hinzu",
    "answer_3": "Es optimiert das Layout für mobile Geräte",
    "answer_4": "Es fügt eine CSS-Animation hinzu",
    "right_answer": "1"
  },
  {
    "question": "Was ist die Bedeutung des 'viewport'-Metatags?",
    "answer_1": "Es steuert das Layout auf mobilen Geräten",
    "answer_2": "Es fügt ein Bild in die Seite ein",
    "answer_3": "Es definiert die Schriftgröße auf mobilen Geräten",
    "answer_4": "Es ändert die Hintergrundfarbe auf mobilen Geräten",
    "right_answer": "1"
  },
  {
    "question": "Welche CSS-Eigenschaft wird verwendet, um den Abstand zwischen den Wörtern zu verändern?",
    "answer_1": "word-spacing",
    "answer_2": "letter-spacing",
    "answer_3": "line-height",
    "answer_4": "text-indent",
    "right_answer": "1"
  },
  {
    "question": "Wie kann man in CSS den Text zentrieren?",
    "answer_1": "Mit der 'text-align'-Eigenschaft",
    "answer_2": "Mit der 'align-items'-Eigenschaft",
    "answer_3": "Mit der 'justify-content'-Eigenschaft",
    "answer_4": "Mit der 'vertical-align'-Eigenschaft",
    "right_answer": "1"
  },
  {
    "question": "Was ist das 'Favicon' einer Website?",
    "answer_1": "Ein kleines Symbol, das in der Browser-Adressleiste angezeigt wird",
    "answer_2": "Ein Hintergrundbild der Website",
    "answer_3": "Ein Teil des HTML-Codes",
    "answer_4": "Ein Video auf der Website",
    "right_answer": "1"
  }
];
