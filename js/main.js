const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "בדיקת רמות ויטמינים ומינרלים",
            "content": "בדיקות דם לזיהוי חוסרים תזונתיים המשפיעים על בריאות ואיכות החיים הטובים",
            "tag": "מעבדה",
            "image": "images/2.png",
            "link":"https://www.israelhayom.co.il/article/431181"
        },
        {
            "id": 2,
            "title": "בדיקת שיווי משקל",
            "content": "בדיקה למדידת שיווי משקל ויכולות פיזיות אחרות מקיפות ומקצועיות נוספות לבריאותך",
            "tag": "פיזיות",
            "image": "images/3.png",
            "link":"https://hospitals.clalit.co.il/kaplan/he/med_units/ent/Pages/vertigo.aspx"
        },
        {
            "id": 3,
            "title": "רנטגן חזה",
            "content": "בדיקת רנטגן לאבחון בעיות נשימה ודלקות מגוונות המשפיעות על איכות חייך ובריאותך",
            "tag": "רנטגן",
            "image": "images/4.png",
            "link":"https://imaging.sheba.co.il/%D7%A6%D7%99%D7%9C%D7%95%D7%9E%D7%99%D7%9D_%D7%95%D7%A9%D7%99%D7%A7%D7%95%D7%A4%D7%99%D7%9D_%D7%A9%D7%9C_%D7%91%D7%99%D7%AA_%D7%94%D7%97%D7%96%D7%94_%D7%95%D7%94%D7%A8%D7%99%D7%90%D7%95%D7%AA"
        },
        {
            "id": 4,
            "title": "בדיקת רמות הורמונים",
            "content": "בדיקות לקביעת רמות הורמונים המשפיעים על התנהגות ואנרגיה בגוף האדם לתפקוד מיטבי",
            "tag": "מעבדה",
            "image": "images/5.png",
            "link":"https://www.clalit.co.il/he/pregnancy_and_birth/preparing_pregnancy/Pages/hormonal_profile.aspx"
        },
        {
            "id": 5,
            "title": "בדיקת רפלקסים",
            "content": "בדיקות למדידת תגובתיות מערכת העצבים החיוניות לתפקוד יומיומי תקין ובריאות כללית",
            "tag": "פיזיות",
            "image": "images/6.png",
            "link":"https://www.doctors.co.il/medical-symptom/medical-tests/reflexes-test/"
        },
        {
            "id": 6,
            "title": "MRI מוח",
            "content": "בדיקה לזיהוי מבנים ותפקודים מוחיים רלוונטיים להתנהגות ולפיתוח אסטרטגיות טיפול ושיפור",
            "tag": "רנטגן",
            "image": "images/7.png",
            "link":"https://imaging.sheba.co.il/MRI_%D7%9E%D7%95%D7%97"
        },
        {
            "id": 7,
            "title": "בדיקת רמות רעלנים בגוף",
            "content": "בדיקות לזיהוי חומרים רעילים בגוף שיכולים להשפיע על מערכת העצבים החיונית",
            "tag": "מעבדה",
            "image": "images/8.png",
            "link":"https://www.clalit.co.il/he/medical/lab_tests/Pages/GOT-(AST).aspx"
        },
        {
            "id": 8,
            "title": "בדיקת גמישות ותנועתיות",
            "content": "בדיקות לתנועתיות גפיים וגמישות שרירים המקדמות יכולת תנועה מיטבית ובריאות פיזית כללית",
            "tag": "פיזיות",
            "image": "images/9.png",
            "link":"https://www.maccabi4u.co.il/new/healthguide/medicalconditions/hypotonia/"
        },
        {
            "id": 9,
            "title": "CT בטן",
            "content": "בדיקה לאבחון מבנה ותפקוד איברי הבטן חיוני לזיהוי בעיות בריאותיות פנימיות",
            "tag": "רנטגן",
            "image": "images/10.png",
            "link":"https://www.clalit.co.il/he/medical/medical_checkups/Pages/abdominal_ct_scan.aspx"
        },
        {
            "id": 10,
            "title": "בדיקת פרופיל מטבולי",
            "content": "בדיקת דם מקיפה הבודקת רמות חומרים כמו גלוקוז, אלקטרוליטים, אנזימי כבד ותפקודי כליות, לזיהוי ואבחון מצבים רפואיים",
            "tag": "מעבדה",
            "image": "images/11.png",
            "link":"https://www.tasmc.org.il/unit-index-page/internalmed/endocrinology/examination-of-metabolic-and-physical-functions/"
        }
    ]
};

// מאזין לאירוע טעינת תוכן הדף
document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.getElementById("itemsContainer");
    const filterButtons = document.querySelectorAll(".filter-button");
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    
    //יצירת כרטיסיות
    function renderCards(category = "all", searchText = "", isSearch = false) {
        // מנקה את התוכן הנוכחי
        itemsContainer.innerHTML = "";

        // מקבל את הפריטים המסוננים לפי קטגוריה וטקסט חיפוש
        const filteredItems = getFilteredItems(category, searchText);
        const trimmedSearch = searchText.trim();

        // אם אין תוצאות, ורק אם מדובר בחיפוש
        if (filteredItems.length === 0 && isSearch && trimmedSearch !== "") {
            const noResultsMessage = document.createElement("h3");
            noResultsMessage.className = "text-center mt-4";
            noResultsMessage.textContent = "לא נמצאו תוצאות לחיפוש שביצעת";
            itemsContainer.appendChild(noResultsMessage);
            return;
        }

        // מעבר על כל פריט במערך המסונן
        filteredItems.forEach(item => {
            // יצירת עמודה עבור Bootstrap
            const cardCol = document.createElement("div");
            cardCol.className = "col-lg-3 mb-3"; // עיצוב רספונסיבי

            // יצירת כרטיס
            const card = document.createElement("div");
            card.className = "card h-100 shadow";

            // יצירת תמונה
            const cardImage = document.createElement("img");
            cardImage.className = "card-img-top";
            cardImage.setAttribute("src", item.image);
            cardImage.setAttribute("alt", item.title);
            

            // יצירת גוף הכרטיס
            const cardBody = document.createElement("div");
            cardBody.className = "card-body d-flex flex-column";

            // יצירת כותרת
            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title text-center fw-bold mt-2";
            cardTitle.textContent = item.title;

            // יצירת טקסט
            const cardText = document.createElement("p");
            cardText.className = "card-text text-center";
            cardText.textContent = item.content;

            // יצירת כפתור
            const detailsButton = document.createElement("a");
            detailsButton.className = "btn btn-primary mt-auto";
            detailsButton.textContent = "לפרטים נוספים";
            detailsButton.setAttribute("href", item.link); // שימוש ב-link מהמערך
            detailsButton.setAttribute("target", "_blank"); // הוספת התכונה לפתיחה בטאב חדש

            // הוספת אלמנטים לגוף הכרטיס
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(detailsButton);

            // הוספת אלמנטים לכרטיס
            card.appendChild(cardImage);
            card.appendChild(cardBody);

            // הוספת כרטיס לעמודה
            cardCol.appendChild(card);

            // הוספת עמודה לקונטיינר
            itemsContainer.appendChild(cardCol);
            // הוספת אלמנט הגדלה לתמונה 
            addImageHoverEffect(card, cardImage);
        });
    }
    

    // פונקציה המסננת פריטים לפי קטגוריה וחיפוש
    function getFilteredItems(category = "all", searchText = "") {

        // הסרת רווחים מיותרים מטקסט החיפוש
        const trimmedSearch = searchText.trim();
        
        // פונקציה המסננת פריטים לפי קטגוריה וטקסט חיפוש
        return jsonData.generators.filter(item => {
            // בדיקה אם הפריט מתאים לקטגוריה הנבחרת (או "all" אם אין הגבלה)
            const categoryMatch = (category === "all") || (item.tag === category);

            // בדיקה אם הפריט מתאים לטקסט החיפוש (או אין חיפוש אם ריק)
            const searchMatch = (trimmedSearch === "") || item.title.includes(trimmedSearch);

            // נחזיר את הפריט רק אם הוא מתאים גם לקטגוריה וגם לטקסט החיפוש
            return categoryMatch && searchMatch;
        });
    }


    // עוברת על כל אחד מהכפתורים במערך כפתורי הפילטר
    filterButtons.forEach(button => {
        // מוסיפים מאזין לכל כפתור
        button.addEventListener("click", function () {
            
            //מסירים את הסימום פעיל מכל הכפתורים 
            filterButtons.forEach(btn => btn.classList.remove("active"));
            
            // הוספת המחלקה "active" לכפתור שנלחץ כעת
            this.classList.add("active");

            // מאפסים את שדה החיפוש
            searchInput.value = "";
            
            // קריאה לפונקציה renderCards עם קטגוריה שהכפתור מכיל ב-data-category,
            renderCards(this.getAttribute("data-category")); // לא שולחים isSearch מכוון שזה לא חיפוש
        });
    });


    // מאזין לאירוע חיפוש
    searchButton.addEventListener("click", () => {
        
        // מאפסים את כפתורי הסינון להסרת הסימון פעיל
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // רענון הכרטיסים עם טקסט החיפוש וידיעה שזה חיפוש
        renderCards("all", searchInput.value, true);
        
    });

    // רינדור של כל הכרטיסים
    renderCards();
    
});


// פונקציה להצגת או הסתרת תפריט הניווט במכשירים ניידים
function toggleNav() {
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

// פונקציה להוספת אפקט של כניסה ויציאה לכרטיסי התמונות במסכים גדולים בלבד
function addImageHoverEffect(card, image) {
    // בדיקה האם המסך גדול מ-992 פיקסלים (נקודת Breakpoint של Bootstrap)
    if (window.matchMedia("(min-width: 992px)").matches) {
        card.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.1)";
            image.style.transition = "transform 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    }
}






