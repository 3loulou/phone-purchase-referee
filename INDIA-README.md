# Phone Purchase Referee - Indian Market Edition

## Overview
This app helps Indian customers find the best smartphone based on their budget and priorities. Gemini AI analyzes phones from a CSV database and provides detailed comparisons with specific trade-offs.

## What Changed

### 1. **CSV Database** (`lib/data/phones-india.csv`)
- 35+ phones covering all price ranges (₹9,999 to ₹179,999)
- Organized by price ranges: budget, mid-range, premium, flagship, ultra-flagship
- Complete specifications including:
  - Battery, camera, display, processor
  - RAM, storage, fast charging
  - 5G support, weight, key features
  - All prices in Indian Rupees (₹)

### 2. **CSV Loader** (`lib/csv-loader.ts`)
- Loads and parses phone data from CSV
- Helper functions to filter by budget, price range, brand
- Search functionality

### 3. **Gemini Comparison** (`ai/gemini-comparison.ts`)
- **Gemini AI does the actual comparison and selection**
- Takes user priorities (battery, camera, performance, etc.)
- Returns:
  - **Selected phone** with detailed reasoning
  - **Runner-up** with explanation
  - **Trade-off analysis** with specific numbers
  - **Specification comparison** across all phones
  - **Budget analysis** with value for money
  - **Priority scores** (0-10) for each phone

### 4. **Updated UI** (`app/compare/page.tsx`)
- Shows selected phone prominently with specifications
- Displays detailed trade-offs (gains vs sacrifices)
- Shows all evaluated phones with strengths/weaknesses
- Priority scores visualization
- Budget analysis with alternatives
- Comprehensive summary

### 5. **Server Actions** (`app/actions.ts`)
- Simplified to use CSV data instead of JSON
- Filters phones by budget
- Calls Gemini for comparison
- Optional Google Search grounding

## How to Use

### 1. Set Up Environment
```bash
# Create .env.local file
echo "GEMINI_API_KEY=your_gemini_api_key_here" > .env.local
```

Get your Gemini API key from: https://aistudio.google.com/apikey

### 2. Run the App
```bash
npm install
npm run dev
```

Open http://localhost:3000

### 3. Compare Phones
1. Enter your budget (e.g., 30000)
2. Enter priorities (e.g., "battery, camera, gaming")
3. Add any additional requirements
4. Click "Find Best Phone"

### 4. View Results
- **Selected Phone**: The best match with full specifications
- **Why This Phone**: Detailed explanation
- **Trade-offs**: What you gain and lose compared to other phones
- **All Phones Evaluated**: Complete list with scores
- **Budget Analysis**: Value for money and alternatives

## Example Queries

### Budget-Focused
- Budget: ₹15,000
- Priorities: battery, value for money
- Result: Will find best battery phone under budget

### Camera-Focused
- Budget: ₹40,000
- Priorities: camera, low-light photography, video
- Result: Will prioritize camera quality

### Gaming
- Budget: ₹25,000
- Priorities: performance, gaming, fast charging
- Result: Will find best gaming phone

### All-Rounder
- Budget: ₹50,000
- Priorities: balanced, battery, camera, performance
- Result: Will find best all-round phone

## Key Features

✅ **35+ Indian Market Phones** - From budget to ultra-flagship  
✅ **Prices in Rupees** - No currency conversion needed  
✅ **AI-Powered Selection** - Gemini analyzes and selects  
✅ **Detailed Trade-offs** - Specific numbers (5000mAh vs 4500mAh)  
✅ **Priority Scores** - 0-10 rating for each priority  
✅ **Budget Analysis** - Value for money explained  
✅ **Specifications Display** - Complete specs for every phone  
✅ **Indian Context** - Considers value, reliability, after-sales  

## Phone Database Structure

```csv
id,name,brand,price_inr,price_range,battery_mah,camera_mp,screen_inches,ram_gb,storage_gb,processor,has_5g,weight_grams,refresh_rate,fast_charging_w,display_type,os,rear_camera_details,front_camera_mp,key_features
```

## Price Ranges

- **Budget**: ₹9,999 - ₹19,999
- **Mid-range**: ₹20,000 - ₹34,999
- **Premium**: ₹35,000 - ₹49,999
- **Flagship**: ₹50,000 - ₹99,999
- **Ultra-flagship**: ₹100,000+

## Technical Stack

- **Next.js 16**: App Router with Server Actions
- **TypeScript**: Full type safety
- **Gemini AI**: Phone comparison and selection
- **Tailwind CSS**: Styling
- **CSV Storage**: Easy to update phone database

## Updating Phone Data

To add/update phones, edit `lib/data/phones-india.csv`:

1. Add a new row with all fields
2. Follow the existing format
3. Ensure `id` is unique (kebab-case)
4. Price in rupees, no commas
5. Save and restart the app

## Future Enhancements

- [ ] User reviews integration
- [ ] Image gallery for phones
- [ ] Comparison history
- [ ] Price drop alerts
- [ ] Regional availability
- [ ] EMI calculator
- [ ] Trade-in value estimator

## Notes

- All prices are approximate and may vary
- Specifications are as per official sources
- Gemini AI provides opinions based on specs and general knowledge
- Always verify prices with retailers before purchase
- Consider warranty and after-sales service in your decision

## License

MIT
