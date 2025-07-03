import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface Translation {
  [key: string]: string | Translation;
}

interface Translations {
  [language: string]: Translation;
}

const translations: Translations = {
  gr: {
    hero: {
      title: 'Liberté Maisonettes',
      subtitle: 'Το στολίδι της Πάργας',
      bookStay: 'Κάντε κράτηση',
      exploreRooms:"Εξερευνήστε τα Δωμάτια"
    },
    nav: {
      home: 'Αρχική',
      about: 'Σχετικά',
      rooms: 'Δωμάτια',
      economyRoom: 'Οικονομικό Δωμάτιο',
      superiorRoom: 'Σουίτες',
      maisonetteRoom: 'Μεζονέτες',
      location: 'Τοποθεσία',
      contact: 'Επικοινωνία',
      bookNow: 'Κράτηση Τώρα',
      backToRooms: 'Επιστροφή στα Δωμάτια',
      RoomDetails:"Λεπτομέρειες Διαμερισμάτων",
      
    },
    about: {
      title: 'Σχετικά με Εμάς',
      description: 'Στο Liberté Maisonettes, προσφέρουμε μια μοναδική εμπειρία διαμονής στην καρδιά της Πάργας. Τα πολυτελή μας δωμάτια, η άψογη εξυπηρέτηση και η ιδανική τοποθεσία μας καθιστούν την τέλεια επιλογή για τις διακοπές σας.',
      hotelTitle: 'Το Ξενοδοχείο Μας',
      hotelDescription: ' Το Liberte Maisonettes είναι ένα νεόκτιστο συγκρότημα που βρίσκεται στην Κύπερη της Πάργας. Απέχει μόλις 1,1 χιλιόμετρα από την υπέροχη αμμώδη παραλία Λύχνος και τα καταγάλανα νερά του Ιονίου. Μέσα από τα ευρύχωρα και πλήρως εξοπλισμένα διαμερίσματά του, μπορείτε να θαυμάσετε την φύση και να απολαύσετε στιγμές χαλάρωσης σε ένα απόλυτο και ήσυχο περιβάλλον',
      breakfastTitle: 'Πρωινό',
      breakfastDescription: 'Απολαυστικό δυναμοτικό ξεκίνημα. Το τέλειο ξεκίνημα για κάθε μέρα. Ένα χορταστικό και υγιεινό πρωινό είναι ο τέλειος τρόπος να ξεκινήσει η μέρα σας.',
      seasideTitle: 'Παραθαλάσσια Τοποθεσία',
      seasideDescription: 'Απολαύστε την εκπληκτική παραθαλάσσια τοποθεσία μας, λίγα μόλις βήματα από την παραλία. Ιδανικό για χαλάρωση και ηλιοθεραπεία.',
      historicTitle: 'Ιστορική Περιοχή',
      historicDescription: 'Εξερευνήστε την πλούσια ιστορία της περιοχής μας, με εύκολη πρόσβαση σε ιστορικά μνημεία και αξιοθέατα.',
      viewsTitle: 'Εκπληκτική Θέα',
      viewsDescription: 'Απολαύστε την εκπληκτική θέα από τα δωμάτιά μας, με πανοραμική θέα στη θάλασσα και το βουνό.',
      viewDetails: 'Δείτε Περισσότερα'
      
    },
    rooms: {
      title: 'Τα Δωμάτιά Μας',
      description: 'Επιλέξτε το δωμάτιο που ταιριάζει στις ανάγκες σας και απολαύστε μια άνετη και πολυτελή διαμονή.',
      economy: 'Οικονομικό',
      superior: 'Superior',
      maisonette: 'Maisonette',
      economyTitle: 'Οικονομικά Δωμάτια',
      economyDescription: 'Ένα άνετο και οικονομικό δωμάτιο, ιδανικό για ζευγάρια ή μικρές οικογένειες.',
      superiorTitle: 'Σουίτες',
      superiorDescription: 'Ένα πολυτελές δωμάτιο με όλες τις ανέσεις για μια αξέχαστη διαμονή.',
      maisonetteTitle: 'Μεζονέτες Δωμάτια',
      maisonetteDescription: 'Ένα ευρύχωρο και πολυτελές δωμάτιο, ιδανικό για οικογένειες ή παρέες φίλων.',
      amenitiesTitle: 'Παροχές Δωματίου',
      bookRoom: 'Κλείστε το',
      roomSize: 'Μέγεθος Δωματίου',
      titleDescription:'Άνετη και οικονομική διαμονή με όλες τις απαραίτητες ανέσεις'
    },
    roomDetails: {
      bgtitle:'Πληροφορίες Δωματίων',
      title: 'Διαμερίσματα',
      overview: 'Το Liberte είναι ένα συγκρότημα με 15 διαμερίσματα υψηλής αισθητικής, από τα οποία μπορείτε να απολαύσετε την πισίνα μέσα στην απόλυτη ιδιωτικότητα, ομορφιά και ηρεμία που προσφέρει η τοποθεσία',
      roomTypesTitle: 'Τα διαμερίσματα μας',
      economyRoom: 'Οικονομικό Δωμάτιο',
      superiorRoom: 'Superior Δωμάτιο',
      maisonetteRoom: 'Maisonette Δωμάτιο',
      amenitiesTitle: 'Ανέσεις και παροχές δωματίων',
      amenitiesDescription: 'Ανακαλύψτε την άνεση και την πολυτέλεια στα ευρύχωρα δωμάτια μας. Κάθε δωμάτιο περιλαμβάνει ένα/δύο υπνοδωμάτια με ένα διπλό/2 μονά κρεβάτια ιδανικά για οικογένειες ή παρέες. Τα μπαλκόνια προσφέρουν εξαιρετική θέα και χαλάρωση.',
      seasideViewsTitle: 'Μπάνιο',
      seasideViewsDescription: ' 1 μπάνιο με ',
      seasideViewsDescription2: ' Ντουζιέρα, ',
      seasideViewsDescription3: ' Πετσέτες, ',
      seasideViewsDescription4: ' Αφρόλουτρο,',
      seasideViewsDescription5: ' Σαμπουάν,',
      seasideViewsDescription6: ' Κοντισιονέρ,',
      seasideViewsDescription7: ' Πιστολάκι',
      modernComfortTitle: 'Δωμάτια',
      modernComfortDescription: '1 δωμάτιο με διπλό κρεβάτι',
      modernComfortDescription2: '1 δωμάτιο με μονά κρεβάτια',
      modernComfortDescription3: 'Κλιματισμός',
      modernComfortDescription4: '32 ιντσες Smart TV στο δωμάτιο',
      modernComfortDescription5: 'Ντουλάπα',
      modernComfortDescription6: 'Σίδερο και απλόστρες',
      modernComfortDescription7: 'Κουρτίνες',
      modernComfortDescription8: 'Σίτες και παράθυρα',
      privateTerraceTitle: 'Κουζίνα',
      privateTerraceDescription: ' Βραστήρες ',
      privateTerraceDescription2: ' Καφετιέρα φίλτρου ',
      privateTerraceDescription3: ' Μάτια κουζίνας/κεραμικές εστίες ',
      privateTerraceDescription4: ' Τοστιέρα',
      privateTerraceDescription5: ' Ποτήρια νερού / κρασιού / κούπες',
      privateTerraceDescription6: 'Πιάτα',
      privateTerraceDescription7: 'Κατσαρόλες',
      privateTerraceDescription8: 'Τηγάνι',
      premiumServiceTitle: 'Σαλόνι',
      premiumServiceDescription: 'Κανάπες τριθέσιες',
      premiumServiceDescription2: 'Τραπεζάκι πρωινού',
      premiumServiceDescription3: 'Wifi'
    },

    economy:{
      /* Mpakasetas help */
      /* rooms */
      title: "Μεζονέτα",
      title55:"Μεζονέτες",
      title15:"Σουίτες + Διαμερίσματα",
      title17:"Μεζονέτες",
    title11: "Διαμέρισμα με θέα στον Κήπο",
    title2:"Σουίτα με Μπαλκόνι",
    title3:"Junior Σουίτα με θέα στον Κήπο",
    title4:"Σουίτα με θέα στην Πισίνα",
    title5:"Διαμέρισμα με θέα στην Πισίνα ",
    title6:"Loft",
    title7:"Economy Δίκλινο Δωμάτιο",
    title8:"Σουίτα με King-Size Κρεβάτι και θέα στην Πισίνα",
    title9:"Σουίτα με Κρεβάτι Queen-Size και θέα στην Πισίνα",
    title10:"Superior Σουίτα",

      
      /* Description */
    d1:"Υπνοδωμάτιο 1: 1 μεγάλο διπλό κρεβάτι",
    d2:"Υπνοδωμάτιο 2: 1 μεγάλο διπλό κρεβάτι",
    d3:"Σαλόνι: 1 καναπές κρεβάτι",
    p4:"Μπάνια: 2",
    d5:"Οι επισκέπτες θα ζήσουν μια ξεχωριστή εμπειρία, καθώς το διαμέρισμα προσφέρει πισίνα υπερχείλισης. Αυτό το ευρύχωρο διαμέρισμα αποτελείται από 1 σαλόνι, 2 ξεχωριστά υπνοδωμάτια και 2 μπάνια με καμπίνα ντους και δωρεάν προϊόντα περιποίησης. Οι επισκέπτες μπορούν να ετοιμάσουν γεύματα στην πλήρως εξοπλισμένη κουζίνα που διαθέτει εστίες μαγειρέματος, ψυγείο και μαγειρικά σκεύη. Αυτό το διαμέρισμα διαθέτει βεράντα με θέα στη θάλασσα, κλιματισμό και τηλεόραση επίπεδης οθόνης με δορυφορικά κανάλια. Η μονάδα διαθέτει 3 κρεβάτια.",
    d6:"1 μεγάλο διπλό κρεβάτι",
    d7:"Το ιδιαίτερο χαρακτηριστικό αυτού του διαμερίσματος είναι η πισίνα υπερχείλισης. Με 1 υπνοδωμάτιο και 1 μπάνιο με καμπίνα ντους, αυτό το διαμέρισμα προσφέρει μια καλά εξοπλισμένη κουζίνα και βεράντα. Η κουζίνα του διαμερίσματος, η οποία διαθέτει εστία μαγειρέματος και ψυγείο, είναι διαθέσιμη για μαγείρεμα και αποθήκευση τροφίμων. Το κλιματιζόμενο διαμέρισμα διαθέτει τηλεόραση επίπεδης οθόνης, ηχομονωτικούς τοίχους, ντουλάπα, πλακάκια στο δάπεδο, καθώς και θέα στον κήπο. Η μονάδα διαθέτει 1 κρεβάτι.",
    d8:"Αυτή η σουίτα προσφέρει πισίνα υπερχείλισης. Αποτελείται από 1 σαλόνι, 1 ξεχωριστό υπνοδωμάτιο και 1 μπάνιο με καμπίνα ντους και δωρεάν προϊόντα περιποίησης. Η κουζίνα της σουίτας, η οποία διαθέτει εστία μαγειρέματος και ψυγείο, είναι διαθέσιμη για μαγείρεμα και αποθήκευση τροφίμων. Με βεράντα με θέα στη θάλασσα, αυτή η σουίτα παρέχει επίσης κλιματισμό και τηλεόραση επίπεδης οθόνης. Η μονάδα διαθέτει 2 κρεβάτια.",
    d9:"Οι επισκέπτες θα ζήσουν μια ξεχωριστή εμπειρία, καθώς η σουίτα διαθέτει πισίνα υπερχείλισης. Αυτή η σουίτα αποτελείται από 1 σαλόνι, 1 ξεχωριστό υπνοδωμάτιο και 1 μπάνιο με καμπίνα ντους και δωρεάν προϊόντα περιποίησης. Η κουζίνα της σουίτας, η οποία διαθέτει εστία μαγειρέματος και ψυγείο, είναι διαθέσιμη για μαγείρεμα και αποθήκευση τροφίμων. Με βεράντα με θέα στην πισίνα, αυτή η σουίτα παρέχει επίσης κλιματισμό και τηλεόραση επίπεδης οθόνης. Η μονάδα προσφέρει 2 κρεβάτια.",
    d10:"Το ξεχωριστό χαρακτηριστικό αυτού του διαμερίσματος είναι η πισίνα υπερχείλισης. Με 1 υπνοδωμάτιο και 1 μπάνιο με ντους, αυτό το διαμέρισμα διαθέτει μια καλά εξοπλισμένη κουζίνα και βεράντα. Η κουζίνα του διαμερίσματος, η οποία διαθέτει εστία μαγειρέματος και ψυγείο, είναι διαθέσιμη για μαγείρεμα και αποθήκευση τροφίμων. Αυτό το διαμέρισμα διαθέτει μπαλκόνι με θέα στην πισίνα, κλιματισμό και τηλεόραση επίπεδης οθόνης. Η μονάδα διαθέτει 1 κρεβάτι.",
    d11:"Το ξεχωριστό χαρακτηριστικό αυτού του διαμερίσματος είναι η πισίνα υπερχείλισης. Με 1 υπνοδωμάτιο και 1 μπάνιο με ντους, αυτό το διαμέρισμα διαθέτει μια καλά εξοπλισμένη κουζίνα και βεράντα. Η κουζίνα του διαμερίσματος, η οποία διαθέτει εστία μαγειρέματος και ψυγείο, είναι διαθέσιμη για μαγείρεμα και αποθήκευση τροφίμων. Με μπαλκόνι με θέα στην πισίνα, αυτό το διαμέρισμα προσφέρει επίσης κλιματισμό και τηλεόραση επίπεδης οθόνης.",
    d12:"Το ξεχωριστό χαρακτηριστικό αυτού του διαμερίσματος είναι η πισίνα υπερχείλισης. Αυτό το διαμέρισμα περιλαμβάνει 1 υπνοδωμάτιο, κουζίνα, βεράντα και 1 μπάνιο με ντους. Η κουζίνα του διαμερίσματος, η οποία διαθέτει εστία μαγειρέματος και ψυγείο, είναι διαθέσιμη για μαγείρεμα και αποθήκευση τροφίμων. Με μπαλκόνι με θέα στην πισίνα, αυτό το διαμέρισμα προσφέρει επίσης κλιματισμό και τηλεόραση επίπεδης οθόνης. Η μονάδα διαθέτει 1 κρεβάτι.",
    d13:"Οι επισκέπτες θα ζήσουν μια ξεχωριστή εμπειρία, καθώς αυτό το διαμέρισμα διαθέτει πισίνα υπερχείλισης. Αυτό το διαμέρισμα περιλαμβάνει 1 υπνοδωμάτιο, κουζίνα, βεράντα και 1 μπάνιο με ντους. Η κουζίνα του διαμερίσματος, η οποία διαθέτει εστία μαγειρέματος και ψυγείο, είναι διαθέσιμη για μαγείρεμα και αποθήκευση τροφίμων. Με μπαλκόνι με θέα στην πισίνα, αυτό το διαμέρισμα προσφέρει επίσης κλιματισμό και τηλεόραση επίπεδης οθόνης. Η μονάδα διαθέτει 1 κρεβάτι.",
    d14:"Οι επισκέπτες θα ζήσουν μια ξεχωριστή εμπειρία, καθώς αυτό το δίκλινο δωμάτιο διαθέτει πισίνα υπερχείλισης. Το δίκλινο δωμάτιο προσφέρει κλιματισμό, ηχομονωτικούς τοίχους, βεράντα με θέα στη θάλασσα, καθώς και ιδιωτικό μπάνιο με ντους. Η μονάδα διαθέτει 1 κρεβάτι.",
    d15:"Αυτή η σουίτα διαθέτει πισίνα υπερχείλισης. Η σουίτα διαθέτει 1 υπνοδωμάτιο και 1 μπάνιο με ντους και δωρεάν προϊόντα περιποίησης. Με βεράντα με θέα στην πισίνα, αυτή η σουίτα παρέχει επίσης κλιματισμό και τηλεόραση επίπεδης οθόνης. Η μονάδα προσφέρει 1 κρεβάτι.",
    d16:"Αυτή η σουίτα διαθέτει πισίνα υπερχείλισης. Διαθέτει 1 σαλόνι, 1 ξεχωριστό υπνοδωμάτιο και 1 μπάνιο με ντους και δωρεάν προϊόντα περιποίησης. Με βεράντα με θέα στην πισίνα, αυτή η σουίτα διαθέτει επίσης κλιματισμό και τηλεόραση επίπεδης οθόνης. Η μονάδα διαθέτει 1 κρεβάτι.",
    d17:"Η μονάδα προσφέρει 2 κρεβάτια.",
      /* sizes */
    size:"Μέγεθος διαμερίσματος: 72 τ.μ.",
    size1:"Μέγεθος διαμερίσματος: 25 τ.μ.",
    size2:"Μέγεθος 27 τ.μ.",
    size3:"Μέγεθος διαμερίσματος: 29 τ.μ.",
    size4:"Μέγεθος 20 τ.μ.",
    size5:"Μέγεθος 30 τ.μ.",
    size6:"Μέγεθος 32 τ.μ.",
      /* Lists */
    list1:"Προϊόντα καθαρισμού",
    list2:"Ψυγείο",
    list3:"Κουζινικά σκεύη",
    list4:"Εστίες",
    list5:"Τραπέζι φαγητού",
    list6:"Μπανιέρα",
    list7:"Δωρεάν προϊόντα περιποίησης ",
    list8:"Ντους",
    list9:"Τουαλέτα",
    list10:"Πετσέτες",
    list11:"Χαρτί υγείας ",
    list12:"Θέα στη θάλασσα",
    list13:"Θέα στην πόλη",
    list14:"Μπαλκόνι",
    list15: "Βεράντα",
    list16:"Κλιματισμός",
    list17:"Κουζίνα",
    list18:"Καναπές",
    list19:"Ξύλινο ή παρκέ δάπεδο",
    list20:"Λευκά είδη",
    list21:"Πρίζα κοντά στο κρεβάτι",
    list22:"Προϊόντα καθαρισμού",
    list23:"Δάπεδο με πλακάκια / μάρμαρο",
    list24:"Επιφάνεια εργασίας",
    list25:"Καθιστικό",
    list26:"Ηχομόνωση",
    list27:"Τηλεόραση",
    list28:"Ψυγείο",
    list29:"Κουνουπιέρα",
    list30:"Δορυφορικά κανάλια",
    list31:"Τηλεόραση επίπεδης οθόνης",
    list32:"Κουζινικά σκεύη",
    list33:"Μικρή κουζίνα",
    list34:"Έπιπλα εξωτερικού χώρου",
    list35:"Τραπεζαρία εξωτερικού χώρου",
    list36:"Ντουλάπα",
    list37:"Εστίες",
    list38:"Τραπέζι φαγητού",
    list39:"Πάνω όροφοι προσβάσιμοι μόνο από σκάλα",
    list40:"Απλώστρα ρούχων",
    list41:"Κάγκελα ασφαλείας για παιδιά",
    list42:"Καναπές-κρεβάτι",
    list43:"Κλιματισμός σε κάθε δωμάτιο του καταλύματος",
    list44:"Αντισηπτικό χεριών",
    list45:"Ιδιωτική σουίτα",
    list46:"Ιδιωτική κουζίνα",
    list47:"Τηλεόραση επίπεδης οθόνης",
    list48:"Δωρεάν WiFi",
    list49:"Ολόκληρο διαμέρισμα",
    list50:"Ιδιωτικό μπάνιο",
    list51:"Θέα στον κήπο",
    list52:"Θέα στην πισίνα",
    list53:"Θέση αποσκευών",
    list54:"Πιάτα",
    list55:"Σαλόνι",
    list56:"Καθρέφτες",
    list57:"Σίτες",
    list58:"Κλιματισμός",
    list59:"Κουζίνα με απορροφυτήρας",
      /* My malakies */
      title1:"Οικονομικά δωμάτια",
      standardTitle:"Οικονομικό Δίκλινο Δωμάτιο",
      paragraph:"Οι επισκέπτες θα ζήσουν μια ξεχωριστή εμπειρία, καθώς αυτό το δίκλινο δωμάτιο διαθέτει πισίνα υπερχείλισης. Το δίκλινο δωμάτιο προσφέρει κλιματισμό, ηχομονωτικούς τοίχους, βεράντα με θέα στη θάλασσα, καθώς και ιδιωτικό μπάνιο με ντους. Η μονάδα διαθέτει 1 κρεβάτι.",
      p1:"Μέγεθος 20 τ.μ.",
      p2:"1 μεγάλο διπλό κρεβάτι",
      p3:"Άνετα κρεβάτια, 9.5 – βάσει 102 σχολίων",
      p8:"Άνετα κρεβάτια, 9.5 - βάσει 103 σχολίων",
      bathroomTitle: "Θέα",
      roomFacilities: "Δωμάτιο",
      c1:"Στο ιδιωτικό μπάνιο σας:",
      c2:"Θέα:",
      c3:"Παροχές:",
      c4:"Στην ιδιωτική κουζίνα σας:",
      product:'Δωρεάν προϊόντα περιποίησης',
      shower:"Ντουζιέρα",
      bathroom:"Τουαλέτα",
      towels:"Πετσέτες",
      paper:"Χαρτί υγείας",
      view:"Θέα στη θάλασσα",
      view2:"Θέα στη πόλη",
      airconditioning:"Κλιματισμός",
      balcony:"Μπαλκόνι",
      tv:"Τηλεόραση",
      veranta:"Βεράντα",
      goods: "Λευκά είδη",
      socket:"Πρίζα κοντά στο κρεβάτι",
      cleans:"Προϊόντα καθαρισμού",
      floor:"Δάπεδο με πλακάκια / μάρμαρο",
      sound:"Ηχομόνωση",
      refrigerator:"Ψυχείο",
      mosquitonet:"Κουνουπιέρα",
      furniture: "Έπιπλα εξωτερικού χώρου",
      dining: "Τραπεζαρία εξωτερικού χώρου",
      closet: "Ντουλάπα",
      stairs: "Πάνω όροφοι προσβάσιμοι μόνο από σκάλα",
      spreader: "Απλώστρα ρούχων",
      railings: "Κάγκελα ασφαλείας για παιδιά",
      roomconditioning:"Κλιματισμός σε κάθε δωμάτιο του καταλύματος",
      hand:"Αντισηπτικό χεριών",

      gardenTitle: "Οικονομικό δωμάτιο",
      gardenDescription: " Μέγεθος 20 τ.μ."
    },

    contact: {
      title: 'Επικοινωνήστε Μαζί Μας',
      description: 'Επικοινωνήστε μαζί μας για οποιαδήποτε ερώτηση ή για να κάνετε κράτηση.',
      phone: 'Τηλέφωνο',
      email: 'Email',
      address: 'Διεύθυνση',
      bookNow: 'Κράτηση Τώρα'
    },
    footer: {
      tagline: 'Ζήστε την απόλυτη εμπειρία διακοπών στην Πάργα.',
      copyright: '© 2024 Liberté Maisonettes'
    },
    amenities: {
      wifi: 'Wi-Fi',
      aircon: 'Κλιματισμός',
      tv: 'Τηλεόραση',
      fridge: 'Ψυγείο',
      guests2: '2 Επισκέπτες',
      parking: 'Πάρκινγκ'
    },
    room: {
      economyView: 'Θέα στην πόλη',
      economyFeatures: 'Το οικονομικό δωμάτιο προσφέρει όλες τις βασικές ανέσεις για μια άνετη διαμονή.',
      economyAmenities: 'Δωρεάν Wi-Fi, κλιματισμός, τηλεόραση, ψυγείο και ιδιωτικό μπάνιο.'
    },
    
    location: {
      title: 'Ανακαλύψτε την Πάργα',
      description: 'Η Πάργα είναι ένας μαγευτικός προορισμός με πλούσια ιστορία και φυσική ομορφιά. Εξερευνήστε τα γραφικά σοκάκια, τις παραλίες και τα ιστορικά μνημεία.',
      explore: 'Εξερευνήστε την Πάργα',
      locationTitle:'Ξεχωριστές περιοχές',
      locationDescription:'Η Κύπερη είναι οικισμός λίγο πριν την παραδεισένια παραλία του Λύχνου και ένα χιλιόμετρο πριν το κέντρο της Πάργας στον οποίο βρίσκονται χτισμένα στην πλαγιά και εναρμονισμένα με τον φυσικό πλούτο διαμερίσματα που εξασφαλίζουν τη χαλάρωση και την ηρεμία.',
      highlights:'Στην περιοχή ξεχωρίζουν',
      paragraph:"Η παραλία του Λύχνου είναι κατάλληλη για οικογένειες και παιδιά χωρίς να επηρεάζονται από τους δυνατούς ανέμους",
      castle:" Κάστρο Πάργας ",
      castleDescription:" Απέχει 4,9 χλμ. Μέσω Επαρ.Οδ.Πέρδικας από το ξενοδοχείο",
      beach:" Παραλία Λύχνος",
      beachDescription:" Απέχει 1,1 χλμ. από το ξενοδοχείο ",
      dayTrips:"Παξοί-Αντιπαξοί",
      dayTripsDescription:"Απέχει μόλις 86,1 χλμ. ( Περιλαμβάνει πορθμείο στην Ηγουμενίτσα )",
      perfectLocation:"Κοντινές περιοχές",
      discoverTitle:" Τοποθεσία ",
      findUs:"Βρείτε μας στους Χάρτες Google"
    },

 
   
  },
  en: {
    hero: {
      title: 'Liberté Maisonettes',
      subtitle: 'The Jewel of Parga',
      bookStay: 'Make a reservation',
      exploreRooms:"Explore Rooms"

    },
    nav: {
      home: 'Home',
      about: 'About',
      rooms: 'Rooms',
      economyRoom: 'Economy Room',
      superiorRoom: 'Suites with pool view',
      maisonetteRoom: 'Maisonettes with view Parga',
      location: 'Location',
      contact: 'Contact',
      bookNow: 'Book Now',
      backToRooms: 'Back to Rooms',
      RoomDetails:"Apartment Detailsσ",
    },
    about: {
      title: 'About Us',
      description: 'At Liberté Maisonettes, we offer a unique accommodation experience in the heart of Parga. Our luxurious rooms, impeccable service, and ideal location make us the perfect choice for your vacation.',
      hotelTitle: 'Our Hotel',
      hotelDescription: 'Liberte Maisonettes is a newly built complex located in Kyperi, Parga. It is just 1.1 km from the excellent sandy beach of Lychnos and the crystal blue waters of the Ionian Sea. Through its spacious and fully equipped dimensions, you can see nature and moments of relaxation in an absolute and peaceful environment',
      breakfastTitle: 'Breakfast Experience',
      breakfastDescription: 'A delicious, energetic start. The perfect start to every day. A filling and healthy breakfast is the perfect way to start your day.',
      seasideTitle: 'Seaside Location',
      seasideDescription: 'Enjoy our stunning seaside location, just steps from the beach. Ideal for relaxation and sunbathing.',
      historicTitle: 'Historic Area',
      historicDescription: 'Explore the rich history of our region, with easy access to historical monuments and attractions.',
      viewsTitle: 'Amazing Views',
      viewsDescription: 'Enjoy the stunning views from our rooms, with panoramic views of the sea and mountain.',
      viewDetails: 'View Details'
    },
    rooms: {
      title: 'Our Rooms',
      description: 'Choose the room that suits your needs and enjoy a comfortable and luxurious stay.',
      economy: 'Economy',
      superior: 'Superior',
      maisonette: 'Maisonette',
      economyTitle: 'Economy Rooms',
      economyDescription: 'A comfortable and affordable room, ideal for couples or small families.',
      superiorTitle: 'Suites Rooms',
      superiorDescription: 'A luxurious room with all the amenities for an unforgettable stay.',
      maisonetteTitle: 'Maisonettes Rooms',
      maisonetteDescription: 'A spacious and luxurious room, ideal for families or groups of friends.',
      amenitiesTitle: 'Room Amenities',
      bookRoom: 'Book Room',
      roomSize: 'Room Size',
      titleDescription:'Comfortable and affordable accommodation with all essential amenities'
    },
    roomDetails: {
      title: 'Apartments',
      overview: 'Liberte is a complex with 15 high-quality apartments, from which you can enjoy the swimming pool in the absolute privacy, beauty and tranquility that the location offers.',
      roomTypesTitle: 'Our apartments',
      economyRoom: 'Economy Room',
      superiorRoom: 'Superior Room',
      maisonetteRoom: 'Maisonette Room',
      amenitiesTitle: 'Room amenities and facilities',
      amenitiesDescription: 'Discover comfort and luxury in our spacious rooms. Each room includes one/two bedrooms with a double/twin beds ideal for families or groups. The balconies offer excellent views and relaxation.',
      seasideViewsTitle: 'Bathroom',
      seasideViewsDescription: ' 1 bathroom with ',
      seasideViewsDescription2: ' Shower, ',
      seasideViewsDescription3: ' Towels, ',
      seasideViewsDescription4: ' Bubble bath,',
      seasideViewsDescription5: ' Shampoo,',
      seasideViewsDescription6: ' Conditioner,',
      seasideViewsDescription7: ' Hair dryer',
      modernComfortTitle: ' Rooms ',
      modernComfortDescription: '1 room with double bed',
      modernComfortDescription2: '1 room with single beds',
      modernComfortDescription3: 'Air conditioning',
      modernComfortDescription4: '32 inch Smart TV in the room',
      modernComfortDescription5: 'Closet',
      modernComfortDescription6: 'Iron and linen',
      modernComfortDescription7: 'Curtains',
      modernComfortDescription8: 'Screens and windows',
      privateTerraceTitle: 'Kitchen',
      privateTerraceDescription: ' Kettles ',
      privateTerraceDescription2: ' Filter coffee maker ',
      privateTerraceDescription3: ' Kitchen hobs/ceramic hobs',
      privateTerraceDescription4: ' Toaster',
      privateTerraceDescription5: ' Glasses of water/ wine / cups',
      privateTerraceDescription6: 'Dishes',
      privateTerraceDescription7: 'Pots',
      privateTerraceDescription8: 'Pan',
      premiumServiceTitle: 'Premium Service',
      premiumServiceDescription: 'Our dedicated staff ensures exceptional service and attention to detail throughout your entire stay.'
    },

    economy:{
      /* Mpakaseta help */ 
      /* rooms */ 
      title: "Maisonette",
      title55:" Maisonettes",
      title15:"Suites + Apartments",
      title17:"Maisonettes",
    title11: "Garden View Apartment",
    title2: "Suite with Balcony",
    title3: "Garden View Junior Suite ",
    title4: "Suite with Pool View",
    title5: "Apartment with Pool View",
    title6: "Loft",
    title7: "Economy Double Room",
    title8: "Suite with King-Size Bed and Pool View",
    title9: "Suite with Queen-Size Bed and Pool View",
    title10: "Superior Suite",
      /* Description */ 
      d1: "Bedroom 1: 1 large double bed",
    d2: "Bedroom 2: 1 large double bed",
    d3: "Living room: 1 sofa bed",
    p4: "Bathrooms: 2",
    d5: "Guests will enjoy a unique experience, as the apartment offers an infinity pool. This spacious apartment consists of 1 living room, 2 separate bedrooms, and 2 bathrooms with a shower cabin and free toiletries. Guests can prepare meals in the fully equipped kitchen featuring a stovetop, refrigerator, and kitchenware. This apartment has a terrace with sea view, air conditioning, and a flat-screen TV with satellite channels. The unit offers 3 beds.",
    d6: "1 large double bed",
    d7: "The special feature of this apartment is the infinity pool. With 1 bedroom and 1 bathroom with a shower cabin, this apartment offers a well-equipped kitchen and a terrace. The apartment's kitchen, which includes a stovetop and refrigerator, is available for cooking and food storage. The air-conditioned apartment features a flat-screen TV, soundproof walls, wardrobe, tiled floor, as well as garden view. The unit offers 1 bed.",
    d8: "This suite offers an infinity pool. It consists of 1 living room, 1 separate bedroom, and 1 bathroom with a shower cabin and free toiletries. The suite's kitchen, which includes a stovetop and refrigerator, is available for cooking and food storage. With a terrace with sea view, this suite also provides air conditioning and a flat-screen TV. The unit offers 2 beds.",
    d9: "Guests will enjoy a unique experience, as the suite features an infinity pool. This suite consists of 1 living room, 1 separate bedroom, and 1 bathroom with a shower cabin and free toiletries. The suite's kitchen, which includes a stovetop and refrigerator, is available for cooking and food storage. With a terrace with pool view, this suite also provides air conditioning and a flat-screen TV. The unit offers 2 beds.",
    d10: "The special feature of this apartment is the infinity pool. With 1 bedroom and 1 bathroom with shower, this apartment has a well-equipped kitchen and a terrace. The apartment's kitchen, which includes a stovetop and refrigerator, is available for cooking and food storage. This apartment has a balcony with pool view, air conditioning, and a flat-screen TV. The unit offers 1 bed.",
    d11: "The special feature of this apartment is the infinity pool. With 1 bedroom and 1 bathroom with shower, this apartment has a well-equipped kitchen and a terrace. The apartment's kitchen, which includes a stovetop and refrigerator, is available for cooking and food storage. With a balcony with pool view, this apartment also offers air conditioning and a flat-screen TV.",
    d12: "The special feature of this apartment is the infinity pool. This apartment includes 1 bedroom, kitchen, terrace, and 1 bathroom with shower. The apartment's kitchen, which includes a stovetop and refrigerator, is available for cooking and food storage. With a balcony with pool view, this apartment also offers air conditioning and a flat-screen TV. The unit offers 1 bed.",
    d13: "Guests will enjoy a unique experience, as this apartment features an infinity pool. This apartment includes 1 bedroom, kitchen, terrace, and 1 bathroom with shower. The apartment's kitchen, which includes a stovetop and refrigerator, is available for cooking and food storage. With a balcony with pool view, this apartment also offers air conditioning and a flat-screen TV. The unit offers 1 bed.",
    d14: "Guests will enjoy a unique experience, as this double room features an infinity pool. The double room offers air conditioning, soundproof walls, a terrace with sea view, as well as a private bathroom with shower. The unit offers 1 bed.",
    d15: "This suite features an infinity pool. The suite includes 1 bedroom and 1 bathroom with shower and free toiletries. With a terrace with pool view, this suite also provides air conditioning and a flat-screen TV. The unit offers 1 bed.",
    d16: "This suite features an infinity pool. It includes 1 living room, 1 separate bedroom, and 1 bathroom with shower and free toiletries. With a terrace with pool view, this suite also features air conditioning and a flat-screen TV. The unit offers 1 bed.",
    d17: "The unit offers 2 beds.",

      /* sizes */
      size: "Apartment size: 72 sq.m.",
    size1: "Apartment size: 25 sq.m.",
    size2: "Size: 27 sq.m.",
    size3: "Apartment size: 29 sq.m.",
    size4: "Size: 20 sq.m.",
    size5: "Size: 30 sq.m.",
    size6: "Size: 32 sq.m.",

      /* Lists */
      list1: "Cleaning products",
    list2: "Refrigerator",
    list3: "Kitchenware",
    list4: "Stovetop",
    list5: "Dining table",
    list6: "Bathtub",
    list7: "Free toiletries",
    list8: "Shower",
    list9: "Toilet",
    list10: "Towels",
    list11: "Toilet paper",
    list12: "Sea view",
    list13: "City view",
    list14: "Balcony",
    list15: "Terrace",
    list16: "Air conditioning",
    list17: "Kitchen",
    list18: "Sofa",
    list19: "Wooden or parquet flooring",
    list20: "Linen",
    list21: "Socket near the bed",
    list22: "Cleaning products",
    list23: "Tile/marble floor",
    list24: "Desk",
    list25:"Seating area",
    list26: "Soundproofing",
    list27: "Television",
    list28: "Refrigerator",
    list29: "Mosquito net",
    list30: "Satellite channels",
    list31: "Flat-screen TV",
    list32: "Kitchenware",
    list33: "Kitchenette",
    list34: "Outdoor furniture",
    list35: "Outdoor dining area",
    list36: "Wardrobe",
    list37: "Stovetop",
    list38: "Dining table",
    list39: "Upper floors accessible only by stairs",
    list40: "Clothes drying rack",
    list41: "Child safety socket covers",
    list42: "Sofa bed",
    list43: "Air conditioning in every room of the accommodation",
    list44: "Hand sanitizer",
    list45: "Private suite",
    list46: "Private kitchen",
    list47: "Flat-screen TV",
    list48: "Free WiFi",
    list49: "Entire apartment",
    list50: "Private bathroom",
    list51: "Garden view",
    list52:"Pool view",
    list53:"Luggage space",
    list54:"Dishes",
    list55:"Sitting Room",
    list56:"Mirror",
    list57:"Sieves",
    list58:"Air condition",
    list59:"Kitchen with extractor hood",
      /* My malakies */
      title1:"Economy Rooms ",
      standardTitle:"Economy Double Rooms",
      paragraph:"Guests will have a unique experience, as this double room features an infinity pool. The double room offers air conditioning, soundproof walls, a terrace with sea views, and a private bathroom with a shower. The unit has 1 bed.",
      p1:"Size 20 sq.m.",
      p2:"1 large double bed",
      p3:"Comfortable beds, 9.5 – based on 102 reviews",
      p8:"Comfortable beds, 9.5 - based on 103 reviews",
      bathroomtitle: "View",
      roomFacilities: "Room",
      c1:"In your private bathroom:",
      c2:"View:",
      c3:"Allowances:",
      c4:"In your private kitchen:",
      product:'Free toiletries',
      shower:"Shower",
      bathroom:"Toilet",
      towels:"Towels",
      paper:"Toilet paper",
      view:"Sea view",
      view2:"City view",
      airconditioning:"Air conditioning",
      balcony:"Balcony",
      tv:"Television",
      veranta:"Veranta",
      goods:"White goods",
      socket:"Socket near the bed",
      cleans:"Cleaning products",
      floor:"Tiled/marble floor",
      sound:"Sound insulations",
      refrigerator:"Refrigerator",
      mosquitonet: "Mosquito net",
      furniture: "Outdoor furniture",
      dining: "Outdoor dining area",
      closet: "Closet",
      stairs: "Upper floors accessible only by stairs",
      spreader: "Clothes rack",
      railings: "Safety railings for children",
      roomconditioning:"Air conditioning in every room of the accommodation",
      hand: "Hand sanitizer",

      gardenTitle: "Budget room",
      gardenDescription: " Size 20 sq.m."

    },
    
    contact: {
      title: 'Contact Us',
      description: 'Contact us for any questions or to make a reservation.',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      bookNow: 'Book Now'
    },
    footer: {
      tagline: 'Experience the ultimate vacation experience in Parga.',
      copyright: '© 2024 Liberté Maisonettes'
    },
    amenities: {
      wifi: 'Wi-Fi',
      aircon: 'Air Conditioning',
      tv: 'Television',
      fridge: 'Fridge',
      guests2: '2 Guests',
      parking: 'Parking'
    },
    room: {
      economyView: 'City view',
      economyFeatures: 'The economy room offers all the basic amenities for a comfortable stay.',
      economyAmenities: 'Free Wi-Fi, air conditioning, TV, fridge and private bathroom.'
    },
     location: {
      title: 'Discover Parga',
      description: 'Parga is a magical destination with a rich history and natural beauty. Explore the picturesque streets, beaches and historical monuments.',
      explore: 'Explore Parga',
      locationTitle:' Separate areas ',
      locationDescription:'Kyperi is a settlement just before the heavenly beach of Lichnos and one kilometer before the center of Parga, where apartments are built on the slope and harmonized with the natural wealth, ensuring relaxation and tranquility.',
      highlights:'In the area they stand out',
      paragraph:"Lichnos beach is suitable for families and children without being affected by strong winds.",
      castle:" Parga Castle ",
      castleDescription:" It is 4.9 km away via Perdikas Regional Road from the hotel.",
      beach:" Lychnos beach",
      beachDescription:" It is 1.1 km from the hotel.",
      dayTrips:"Paxos-Antipaxos",
      dayTripsDescription:"It is only 86.1 km away (Includes ferry to Igoumenitsa)",
      perfectLocation:"Nearby areas",
      discoverTitle:" Location ",
      findUs:"Find Us on google maps"
    },

  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'gr');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
