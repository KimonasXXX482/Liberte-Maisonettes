import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
export const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.rooms': 'Rooms',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    'nav.economyRoom': 'Economy Room',
    'nav.superiorRoom': 'Superior Room',
    'nav.maisonetteRoom': 'Maisonette Room',
    'nav.backToRooms': 'Back to Rooms',

    // Hero Section
    'hero.title': 'Liberte Maisonettes',
    'hero.subtitle': 'Luxury accommodations in the heart of Parga, Greece',
    'hero.description': 'Experience the ultimate Mediterranean getaway where azure waters meet ancient charm',
    'hero.bookStay': 'Book Your Stay',
    'hero.exploreRooms': 'Explore Rooms',

    // About Section
    'about.title': 'Welcome to Paradise',
    'about.description': 'Nestled in the picturesque coastal town of Parga, Liberte Maisonettes offers an exclusive retreat where traditional Greek hospitality meets modern luxury. Our carefully designed accommodations provide the perfect base to explore the stunning Ionian coastline and immerse yourself in the rich culture of northern Greece.',
    'about.hotelTitle': 'About Our Hotel',
    'about.hotelDescription': 'Liberte Maisonettes is a newly built complex located in Kyperri, Parga and the summer of 2022 was its first year of operation. It is just 1.1 kilometers from the excellent sandy beach of Lichnos and its crystal blue waters????? Through its spacious and fully equipped apartments, you can see nature and moments of relaxation in an absolutely quiet environment.',
    'about.breakfastTitle': 'Breakfast Experience',
    'about.breakfastDescription': 'Start your day with our delicious continental breakfast featuring fresh local ingredients. Enjoy traditional Greek specialties, fresh fruits, homemade pastries, and premium coffee while taking in the stunning views of the Ionian Sea. Our breakfast is served daily from 8:00 AM to 10:30 AM in our charming breakfast area or on your private terrace upon request.',
    'about.seasideTitle': 'Seaside Location',
    'about.seasideDescription': 'Just steps away from pristine beaches and crystal-clear waters of the Ionian Sea',
    'about.historicTitle': 'Historic Charm',
    'about.historicDescription': 'Surrounded by Venetian architecture and ancient castles with breathtaking views',
    'about.viewsTitle': 'Unforgettable Views',
    'about.viewsDescription': 'Panoramic vistas of the coastline and traditional Greek island architecture',
    'about.viewDetails': 'View Details',

    // Rooms Section
    'rooms.title': 'Our Accommodations',
    'rooms.description': 'Choose from our carefully designed rooms, each offering unique features and stunning views. All accommodations are equipped with modern amenities to ensure your comfort during your stay in Parga.',
    'rooms.economy': 'Economy',
    'rooms.superior': 'Superior',
    'rooms.maisonette': 'Maisonette',
    'rooms.economyTitle': 'Economy Room',
    'rooms.economyDescription': 'Comfortable and affordable accommodation with all essential amenities for a pleasant stay. The Economy Room features a cozy layout with a comfortable double bed, private bathroom with shower, and a small seating area. Large windows provide natural light and fresh air, creating a pleasant atmosphere for rest and relaxation after exploring Parga.',
    'rooms.superiorTitle': 'Superior Room',
    'rooms.superiorDescription': 'Enhanced comfort with premium amenities and beautiful views of the surrounding area. This elegantly appointed room features a queen-size bed with premium linens, a comfortable seating area with armchair, and a modern bathroom with upgraded fixtures. The room\'s design incorporates traditional Greek elements with contemporary comfort.',
    'rooms.maisonetteTitle': 'Maisonette Room',
    'rooms.maisonetteDescription': 'Spacious two-level accommodation with private terrace and luxury amenities. This exceptional two-level maisonette features a master bedroom with king-size bed on the upper level, a spacious living area with sofa bed on the ground floor, and a private terrace with outdoor furniture.',
    'rooms.view': 'View',
    'rooms.roomSize': 'Room Size',
    'rooms.amenitiesTitle': 'Amenities & Facilities',
    'rooms.bookRoom': 'Book',

    // Room Details
    'room.economyView': 'Garden view with glimpses of the surrounding Mediterranean landscape and local architecture.',
    'room.superiorView': 'Partial sea view with beautiful glimpses of the Ionian Sea and the charming town of Parga.',
    'room.maisonetteView': 'Panoramic sea view overlooking the crystal-clear waters of the Ionian Sea and Parga\'s coastline.',
    'room.economyFeatures': 'The Economy Room features a cozy layout with a comfortable double bed, private bathroom with shower, and a small seating area. Large windows provide natural light and fresh air, creating a pleasant atmosphere for rest and relaxation after exploring Parga.',
    'room.superiorFeatures': 'This elegantly appointed room features a queen-size bed with premium linens, a comfortable seating area with armchair, and a modern bathroom with upgraded fixtures. The room\'s design incorporates traditional Greek elements with contemporary comfort, creating a sophisticated atmosphere perfect for relaxation.',
    'room.maisonetteFeatures': 'This exceptional two-level maisonette features a master bedroom with king-size bed on the upper level, a spacious living area with sofa bed on the ground floor, and a private terrace with outdoor furniture. The accommodation includes a fully equipped kitchenette, luxurious bathroom with bathtub, and traditional Greek architectural details combined with modern luxury amenities.',
    'room.economyAmenities': 'All the essential amenities you need for a comfortable stay, ensuring convenience and quality at an affordable price.',
    'room.superiorAmenities': 'Enhanced amenities and premium features designed to provide superior comfort and convenience during your stay.',
    'room.maisonetteAmenities': 'Premium luxury amenities and exclusive facilities designed to provide the ultimate comfort and convenience for an unforgettable stay in Parga.',

    // Amenities
    'amenities.wifi': 'Free WiFi',
    'amenities.aircon': 'Air Conditioning',
    'amenities.tv': 'Flat Screen TV',
    'amenities.smartTv': 'Smart TV',
    'amenities.fridge': 'Mini Fridge',
    'amenities.minibar': 'Mini Bar',
    'amenities.guests2': 'Up to 2 Guests',
    'amenities.guests4': 'Up to 4 Guests',
    'amenities.parking': 'Free Parking',
    'amenities.bathroom': 'Premium Bathroom',
    'amenities.bathtub': 'Luxury Bathroom with Bathtub',
    'amenities.seaView': 'Panoramic Sea View',
    'amenities.partialSeaView': 'Partial Sea View',
    'amenities.terrace': 'Private Terrace',
    'amenities.kitchenette': 'Full Kitchenette',

    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.description': 'Ready to experience the magic of Parga? Contact us to book your perfect getaway',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.bookNow': 'Book Your Stay Now',

    // Footer
    'footer.tagline': 'Your luxury escape in Parga, Greece',
    'footer.copyright': '© 2024 Liberte Maisonettes. All rights reserved.',

    // Location Page
    'location.discoverTitle': 'Discover Parga',
    'location.discoverSubtitle': 'Explore the enchanting town of Parga and its surrounding natural wonders',
    'location.locationTitle': 'The Location',
    'location.locationDescription': 'Located in Kiperi, Parga, our maisonettes are perfectly positioned to explore the natural beauty and rich history of this enchanting destination. Parga is renowned for its crystal-clear waters, venetian architecture, and vibrant local culture.',
    'location.highlights': 'Στην περιοχή ξεχωρίζουν',
    'location.perfectLocation': 'Perfect Location',
    'location.castle': 'Parga Castle',
    'location.castleDescription': '5-minute walk to the historic Venetian castle',
    'location.beach': 'Valtos Beach',
    'location.beachDescription': '3-minute walk to the main beach and waterfront',
    'location.tavernas': 'Local Tavernas',
    'location.tavernasDescription': 'Authentic Greek cuisine within walking distance',
    'location.dayTrips': 'Day Trips',
    'location.dayTripsDescription': 'Easy access to Corfu, Meteora, and coastal villages',
    'location.findUs': 'Find Us',
    'location.findUsDescription': 'Located in the heart of Parga, our maisonettes offer easy access to the beach, historic sites, and local attractions',
  },
  gr: {
    // Header
    'nav.home': 'Αρχική',
    'nav.about': 'Σχετικά',
    'nav.rooms': 'Δωμάτια',
    'nav.location': 'Τοποθεσία',
    'nav.contact': 'Επικοινωνία',
    'nav.bookNow': 'Κάντε Κράτηση',
    'nav.economyRoom': 'Οικονομικό Δωμάτιο',
    'nav.superiorRoom': 'Ανώτερο Δωμάτιο',
    'nav.maisonetteRoom': 'Μεζονετάκι',
    'nav.backToRooms': 'Επιστροφή στα Δωμάτια',

    // Hero Section
    'hero.title': 'Liberte Maisonettes',
    'hero.subtitle': 'Πολυτελείς καταλύματα στην καρδιά της Πάργας, Ελλάδα',
    'hero.description': 'Βιώστε την απόλυτη μεσογειακή απόδραση όπου τα γαλάζια νερά συναντούν την αρχαία γοητεία',
    'hero.bookStay': 'Κάντε Κράτηση',
    'hero.exploreRooms': 'Εξερευνήστε Δωμάτια',

    // About Section
    'about.title': 'Καλώς ήρθατε στον Παράδεισο',
    'about.description': 'Φωλιασμένα στη γραφική παραθαλάσσια πόλη της Πάργας, τα Liberte Maisonettes προσφέρουν ένα αποκλειστικό καταφύγιο όπου η παραδοσιακή ελληνική φιλοξενία συναντά την σύγχρονη πολυτέλεια. Οι προσεκτικά σχεδιασμένες καταλύσεις μας παρέχουν την τέλεια βάση για να εξερευνήσετε την εκπληκτική ακτογραμμή του Ιονίου και να βυθιστείτε στον πλούσιο πολιτισμό της βόρειας Ελλάδας.',
    'about.hotelTitle': 'Σχετικά με το Ξενοδοχείο μας',
    'about.hotelDescription': 'Το Liberte Maisonettes είναι ένα νεόκτιστο συγκρότημα που βρίσκεται στην Κύπερρη της Πάργας και το καλοκαίρι του 2022 ήταν ο πρώτος χρόνος λειτουργίας του. Απέχει μόλις 1,1 χιλιόμετρα από την υπέροχη αμμώδη παραλία λίχνος και τα καταγάλανα νερά του????? Μέσα από τα ευρύχωρα και πλήρως εξοπλισμένα διαμερίσματά του, μπορείτε να θαυμάσετε την φύση και να απολαύσετε στιγμές χαλάρωσης σε ένα απόλυτο ήσυχο περιβάλλον.',
    'about.breakfastTitle': 'Εμπειρία Πρωινού',
    'about.breakfastDescription': 'Ξεκινήστε τη μέρα σας με το νόστιμο continental πρωινό μας με φρέσκα τοπικά συστατικά. Απολαύστε παραδοσιακές ελληνικές σπεσιαλιτέ, φρέσκα φρούτα, σπιτικά γλυκίσματα και premium καφέ ενώ απολαμβάνετε την εκπληκτική θέα του Ιονίου Πελάγους. Το πρωινό μας σερβίρεται καθημερινά από 8:00 π.μ. έως 10:30 π.μ. στον γοητευτικό χώρο πρωινού μας ή στη ιδιωτική σας βεράντα κατόπιν αιτήματος.',
    'about.seasideTitle': 'Παραθαλάσσια Τοποθεσία',
    'about.seasideDescription': 'Μόλις λίγα βήματα από παρθένες παραλίες και κρυστάλλινα νερά του Ιονίου Πελάγους',
    'about.historicTitle': 'Ιστορική Γοητεία',
    'about.historicDescription': 'Περιτριγυρισμένα από βενετσιάνικη αρχιτεκτονική και αρχαία κάστρα με εκπληκτικές θέες',
    'about.viewsTitle': 'Αξέχαστες Θέες',
    'about.viewsDescription': 'Πανοραμικές θέες της ακτογραμμής και παραδοσιακής ελληνικής νησιωτικής αρχιτεκτονικής',
    'about.viewDetails': 'Δείτε Λεπτομέρειες',

    // Rooms Section
    'rooms.title': 'Οι Καταλύσεις μας',
    'rooms.description': 'Επιλέξτε από τα προσεκτικά σχεδιασμένα δωμάτιά μας, το καθένα προσφέρει μοναδικά χαρακτηριστικά και εκπληκτικές θέες. Όλες οι καταλύσεις είναι εξοπλισμένες με σύγχρονες ανέσεις για να εξασφαλίσουν την άνεσή σας κατά τη διαμονή σας στην Πάργα.',
    'rooms.economy': 'Οικονομικό',
    'rooms.superior': 'Ανώτερο',
    'rooms.maisonette': 'Μεζονετάκι',
    'rooms.economyTitle': 'Οικονομικό Δωμάτιο',
    'rooms.economyDescription': 'Άνετο και οικονομικό κατάλυμα με όλες τις απαραίτητες ανέσεις για μια ευχάριστη διαμονή. Το Οικονομικό Δωμάτιο διαθέτει άνετη διάταξη με άνετο διπλό κρεβάτι, ιδιωτικό μπάνιο με ντους και μικρό καθιστικό. Τα μεγάλα παράθυρα παρέχουν φυσικό φως και καθαρό αέρα.',
    'rooms.superiorTitle': 'Ανώτερο Δωμάτιο',
    'rooms.superiorDescription': 'Ενισχυμένη άνεση με premium ανέσεις και όμορφες θέες της γύρω περιοχής. Αυτό το κομψά διακοσμημένο δωμάτιο διαθέτει queen-size κρεβάτι με premium κλινοσκεπάσματα, άνετο καθιστικό με πολυθρόνα και μοντέρνο μπάνιο με αναβαθμισμένα εξαρτήματα.',
    'rooms.maisonetteTitle': 'Μεζονετάκι',
    'rooms.maisonetteDescription': 'Ευρύχωρο διώροφο κατάλυμα με ιδιωτική βεράντα και πολυτελείς ανέσεις. Αυτό το εξαιρετικό διώροφο μεζονετάκι διαθέτει master υπνοδωμάτιο με king-size κρεβάτι στον επάνω όροφο, ευρύχωρο σαλόνι με καναπέ-κρεβάτι στο ισόγειο και ιδιωτική βεράντα.',
    'rooms.view': 'Θέα',
    'rooms.roomSize': 'Μέγεθος Δωματίου',
    'rooms.amenitiesTitle': 'Ανέσεις & Εγκαταστάσεις',
    'rooms.bookRoom': 'Κράτηση',

    // Room Details
    'room.economyView': 'Θέα στον κήπο με αναλαμπές του γύρω μεσογειακού τοπίου και της τοπικής αρχιτεκτονικής.',
    'room.superiorView': 'Μερική θέα στη θάλασσα με όμορφες αναλαμπές του Ιονίου Πελάγους και της γοητευτικής πόλης της Πάργας.',
    'room.maisonetteView': 'Πανοραμική θέα στη θάλασσα με θέα στα κρυστάλλινα νερά του Ιονίου Πελάγους και την ακτογραμμή της Πάργας.',
    'room.economyFeatures': 'Το Οικονομικό Δωμάτιο διαθέτει άνετη διάταξη με άνετο διπλό κρεβάτι, ιδιωτικό μπάνιο με ντους και μικρό καθιστικό. Τα μεγάλα παράθυρα παρέχουν φυσικό φως και καθαρό αέρα, δημιουργώντας μια ευχάριστη ατμόσφαιρα για ξεκούραση και χαλάρωση μετά την εξερεύνηση της Πάργας.',
    'room.superiorFeatures': 'Αυτό το κομψά διακοσμημένο δωμάτιο διαθέτει queen-size κρεβάτι με premium κλινοσκεπάσματα, άνετο καθιστικό με πολυθρόνα και μοντέρνο μπάνιο με αναβαθμισμένα εξαρτήματα. Ο σχεδιασμός του δωματίου ενσωματώνει παραδοσιακά ελληνικά στοιχεία με σύγχρονη άνεση, δημιουργώντας μια εκλεπτυσμένη ατμόσφαιρα ιδανική για χαλάρωση.',
    'room.maisonetteFeatures': 'Αυτό το εξαιρετικό διώροφο μεζονετάκι διαθέτει master υπνοδωμάτιο με king-size κρεβάτι στον επάνω όροφο, ευρύχωρο σαλόνι με καναπέ-κρεβάτι στο ισόγειο και ιδιωτική βεράντα με έπιπλα εξωτερικού χώρου. Το κατάλυμα περιλαμβάνει πλήρως εξοπλισμένη μικρή κουζίνα, πολυτελές μπάνιο με μπανιέρα και παραδοσιακές ελληνικές αρχιτεκτονικές λεπτομέρειες σε συνδυασμό με σύγχρονες πολυτελείς ανέσεις.',
    'room.economyAmenities': 'Όλες οι απαραίτητες ανέσεις που χρειάζεστε για μια άνετη διαμονή, εξασφαλίζοντας ευκολία και ποιότητα σε προσιτή τιμή.',
    'room.superiorAmenities': 'Ενισχυμένες ανέσεις και premium χαρακτηριστικά σχεδιασμένα για να παρέχουν ανώτερη άνεση και ευκολία κατά τη διαμονή σας.',
    'room.maisonetteAmenities': 'Premium πολυτελείς ανέσεις και αποκλειστικές εγκαταστάσεις σχεδιασμένες για να παρέχουν την απόλυτη άνεση και ευκολία για μια αξέχαστη διαμονή στην Πάργα.',

    // Amenities
    'amenities.wifi': 'Δωρεάν WiFi',
    'amenities.aircon': 'Κλιματισμός',
    'amenities.tv': 'Επίπεδη Οθόνη TV',
    'amenities.smartTv': 'Smart TV',
    'amenities.fridge': 'Mini Ψυγείο',
    'amenities.minibar': 'Mini Bar',
    'amenities.guests2': 'Έως 2 Επισκέπτες',
    'amenities.guests4': 'Έως 4 Επισκέπτες',
    'amenities.parking': 'Δωρεάν Parking',
    'amenities.bathroom': 'Premium Μπάνιο',
    'amenities.bathtub': 'Πολυτελές Μπάνιο με Μπανιέρα',
    'amenities.seaView': 'Πανοραμική Θέα Θάλασσας',
    'amenities.partialSeaView': 'Μερική Θέα Θάλασσας',
    'amenities.terrace': 'Ιδιωτική Βεράντα',
    'amenities.kitchenette': 'Πλήρης Μικρή Κουζίνα',

    // Contact Section
    'contact.title': 'Επικοινωνήστε μαζί μας',
    'contact.description': 'Έτοιμοι να βιώσετε τη μαγεία της Πάργας; Επικοινωνήστε μαζί μας για να κλείσετε την τέλεια απόδρασή σας',
    'contact.phone': 'Τηλέφωνο',
    'contact.email': 'Email',
    'contact.address': 'Διεύθυνση',
    'contact.bookNow': 'Κάντε Κράτηση Τώρα',

    // Footer
    'footer.tagline': 'Η πολυτελής σας απόδραση στην Πάργα, Ελλάδα',
    'footer.copyright': '© 2024 Liberte Maisonettes. Όλα τα δικαιώματα διατηρούνται.',

    // Location Page
    'location.discoverTitle': 'Ανακαλύψτε την Πάργα',
    'location.discoverSubtitle': 'Εξερευνήστε τη μαγευτική πόλη της Πάργας και τα γύρω φυσικά θαύματα',
    'location.locationTitle': 'Η Τοποθεσία',
    'location.locationDescription': 'Βρισκόμενα στο Κυπέρι της Πάργας, τα μεζονετάκια μας είναι ιδανικά τοποθετημένα για να εξερευνήσετε τη φυσική ομορφιά και την πλούσια ιστορία αυτού του μαγευτικού προορισμού. Η Πάργα είναι διάσημη για τα κρυστάλλινα νερά της, τη βενετσιάνικη αρχιτεκτονική και τη ζωντανή τοπική κουλτούρα.',
    'location.highlights': 'Στην περιοχή ξεχωρίζουν',
    'location.perfectLocation': 'Τέλεια Τοποθεσία',
    'location.castle': 'Κάστρο Πάργας',
    'location.castleDescription': '5 λεπτά με τα πόδια από το ιστορικό Βενετσιάνικο κάστρο',
    'location.beach': 'Παραλία Βάλτος',
    'location.beachDescription': '3 λεπτά με τα πόδια από την κύρια παραλία και την προκυμαία',
    'location.tavernas': 'Τοπικές Ταβέρνες',
    'location.tavernasDescription': 'Αυθεντική ελληνική κουζίνα σε κοντινή απόσταση',
    'location.dayTrips': 'Ημερήσιες Εκδρομές',
    'location.dayTripsDescription': 'Εύκολη πρόσβαση στην Κέρκυρα, τα Μετέωρα και παράκτια χωριά',
    'location.findUs': 'Βρείτε μας',
    'location.findUsDescription': 'Στην καρδιά της Πάργας, τα μεζονετάκια μας προσφέρουν εύκολη πρόσβαση στην παραλία, ιστορικά μνημεία και τοπικά αξιοθέατα',
  },
};
