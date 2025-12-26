# DishShowcase Component Template

A reusable React component for showcasing menu items with an elegant, interactive design. Perfect for displaying thalis, platters, or any dish collection on your restaurant website.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Props Reference](#props-reference)
- [Data Structure](#data-structure)
- [Customization](#customization)
- [Example Usage](#example-usage)
- [Theming](#theming)

---

## Installation

### Prerequisites

Make sure you have the following in your React project:

1. **Google Fonts** - Add to your `index.html` or import in CSS:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
   ```

2. **Font Awesome** - For icons:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   ```

### Adding the Component

Copy these files to your project:

```
src/
└── components/
    ├── DishShowcase.jsx
    └── DishShowcase.css
```

---

## Quick Start

```jsx
import DishShowcase from './components/DishShowcase';

function App() {
  const menuData = {
    title: "Mutton Fry Thali",
    subtitle: "An Ode to the Maratha Legacy",
    heritage: {
      title: "The Culinary Heritage",
      description: "Born in the royal kitchens of the Maratha empire..."
    },
    mainImage: {
      src: "/images/main-thali.png",
      alt: "Kolhapuri Mutton Fry Thali",
      title: "The Complete Plate",
      description: "A symphony of flavors arranged on a traditional steel thali"
    },
    dishes: [
      {
        id: "tambda",
        name: "Tambda Rassa",
        icon: "fa-solid fa-fire",
        shortDescription: "The fiery red starter curry packed with heat.",
        image: "/images/tambda-rassa.png",
        story: "A fiery symphony of dried red chilies...",
        storyLabel: "The Masala Story",
        benefits: "Ignites the digestive fire...",
        benefitsLabel: "The Warrior's Fuel",
        stats: {
          calories: "210 kcal",
          protein: "12g",
          fat: "16g"
        }
      }
      // ... more dishes
    ],
    dishesTitle: "Explore Each Dish"
  };

  return <DishShowcase {...menuData} />;
}
```

---

## Props Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | No | Main title displayed in hero header |
| `subtitle` | `string` | No | Tagline below the title |
| `heritage` | `object` | No | Heritage/history section content |
| `heritage.title` | `string` | No | Heritage section heading |
| `heritage.description` | `string` | No | Heritage description text |
| `mainImage` | `object` | No | Main showcase image configuration |
| `mainImage.src` | `string` | No | Image source URL |
| `mainImage.alt` | `string` | No | Image alt text |
| `mainImage.title` | `string` | No | Section title above image |
| `mainImage.description` | `string` | No | Section description |
| `dishes` | `array` | No | Array of dish objects |
| `dishesTitle` | `string` | No | Title for the dishes grid section |

---

## Data Structure

### Dish Object

Each dish in the `dishes` array should follow this structure:

```javascript
{
  id: "unique-id",           // Unique identifier
  name: "Dish Name",         // Display name
  icon: "fa-solid fa-fire",  // Font Awesome icon class
  shortDescription: "...",   // Brief description for card
  image: "/path/to/image",   // Image for modal (optional)
  story: "...",              // Detailed story/description
  storyLabel: "The Story",   // Custom label for story section
  benefits: "...",           // Benefits/features text
  benefitsLabel: "Benefits", // Custom label for benefits
  stats: {                   // Nutritional stats (optional)
    calories: "210 kcal",
    protein: "12g",
    fat: "16g"
  }
}
```

---

## Customization

### Adding New Dishes

Simply add more objects to the `dishes` array:

```javascript
const newDish = {
  id: "chicken-curry",
  name: "Chicken Curry",
  icon: "fa-solid fa-drumstick-bite",
  shortDescription: "Tender chicken in aromatic spices.",
  image: "/images/chicken-curry.png",
  story: "Our signature chicken curry...",
  storyLabel: "The Recipe",
  benefits: "High in protein...",
  benefitsLabel: "Nutrition",
  stats: {
    calories: "280 kcal",
    protein: "25g",
    fat: "18g"
  }
};

dishes.push(newDish);
```

### Available Icons

Use any Font Awesome icon. Common food-related icons:

| Icon | Class |
|------|-------|
| Fire | `fa-solid fa-fire` |
| Cloud | `fa-solid fa-cloud` |
| Drumstick | `fa-solid fa-drumstick-bite` |
| Bowl | `fa-solid fa-bowl-food` |
| Egg | `fa-solid fa-egg` |
| Wheat | `fa-solid fa-wheat-awn` |
| Pepper | `fa-solid fa-pepper-hot` |
| Utensils | `fa-solid fa-utensils` |
| Fish | `fa-solid fa-fish` |
| Leaf | `fa-solid fa-leaf` |

---

## Theming

### CSS Variables

Override these CSS variables to customize colors:

```css
.dish-showcase-container {
  --primary: #8B0000;    /* Primary color (headings, accents) */
  --gold: #D4AF37;       /* Gold accent color */
  --dark: #1a1a1a;       /* Dark text color */
  --light: #f9f5eb;      /* Light background */
  --white: #ffffff;      /* White color */
}
```

### Example: Blue Theme

```css
.dish-showcase-container {
  --primary: #1e3a5f;
  --gold: #c9a227;
  --dark: #2c3e50;
  --light: #ecf0f1;
}
```

### Example: Green Theme (Vegetarian)

```css
.dish-showcase-container {
  --primary: #2d5a27;
  --gold: #8bc34a;
  --dark: #1b2e1a;
  --light: #f1f8e9;
}
```

---

## Example Usage

### Vegetarian Thali

```jsx
<DishShowcase
  title="Maharashtrian Veg Thali"
  subtitle="A Garden of Flavors"
  heritage={{
    title: "Farm to Table",
    description: "Fresh vegetables from local farms..."
  }}
  mainImage={{
    src: "/images/veg-thali.png",
    alt: "Vegetarian Thali",
    title: "The Green Plate",
    description: "Nutritious and delicious"
  }}
  dishes={[
    {
      id: "dal",
      name: "Dal Tadka",
      icon: "fa-solid fa-bowl-food",
      shortDescription: "Lentils tempered with spices",
      // ... more fields
    }
  ]}
  dishesTitle="Explore Our Vegetables"
/>
```

### Seafood Platter

```jsx
<DishShowcase
  title="Coastal Seafood Platter"
  subtitle="Fresh from the Arabian Sea"
  heritage={{
    title: "Coastal Heritage",
    description: "Traditional Konkan recipes..."
  }}
  mainImage={{
    src: "/images/seafood-platter.png",
    alt: "Seafood Platter",
    title: "Ocean's Bounty",
    description: "The freshest catch"
  }}
  dishes={[
    {
      id: "pomfret",
      name: "Pomfret Fry",
      icon: "fa-solid fa-fish",
      shortDescription: "Crispy fried pomfret",
      // ... more fields
    }
  ]}
  dishesTitle="Discover Our Seafood"
/>
```

---

## Component Features

- **Responsive Design** - Works on all screen sizes
- **Smooth Animations** - Fade-in effects on cards
- **Interactive Modal** - Click cards to see detailed info
- **Keyboard Support** - Press ESC to close modal
- **Customizable Theme** - CSS variables for easy theming
- **Accessible** - Proper ARIA labels and keyboard navigation

---

## File Structure

```
src/
└── components/
    ├── DishShowcase.jsx    # Main React component
    └── DishShowcase.css    # Component styles

Images/                      # Store your dish images here
├── main-thali.png
├── tambda-rassa.png
├── pandhara-rassa.png
└── ...
```

---

## Tips

1. **Image Optimization**: Use WebP format for faster loading
2. **Lazy Loading**: Consider adding lazy loading for images
3. **SEO**: Add proper alt text to all images
4. **Performance**: Keep the dishes array reasonable (6-12 items)

---

## Original HTML Reference

The original HTML implementation is available at:
`kolhapuri-thali-interactive.html`

This React component is a direct conversion maintaining all visual and functional features.
