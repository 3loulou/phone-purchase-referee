import fs from "fs";
import path from "path";

export interface PhoneData {
  id: string;
  name: string;
  brand: string;
  price_inr: number;
  price_range: string;
  battery_mah: number;
  camera_mp: number;
  screen_inches: number;
  ram_gb: number;
  storage_gb: number;
  processor: string;
  has_5g: boolean;
  weight_grams: number;
  refresh_rate: number;
  fast_charging_w: number;
  display_type: string;
  os: string;
  rear_camera_details: string;
  front_camera_mp: number;
  key_features: string;
}

/**
 * Parse CSV file and return phone data
 */
export function loadPhonesFromCSV(): PhoneData[] {
  const csvPath = path.join(process.cwd(), "lib", "data", "phones-india.csv");
  const csvContent = fs.readFileSync(csvPath, "utf-8");

  const lines = csvContent.trim().split("\n");
  if (lines.length === 0) return [];
  
  const headers = lines[0]?.split(",") || [];
  if (headers.length === 0) return [];

  const phones: PhoneData[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    const values = parseCSVLine(line);
    
    if (values.length !== headers.length) {
      console.warn(`Skipping line ${i + 1}: column mismatch`);
      continue;
    }

    const phone: any = {};
    headers.forEach((header, index) => {
      const value = values[index];
      
      // Skip empty values
      if (!value || !header) return;
      
      // Type conversion based on header
      if (header === "price_inr" || header.includes("battery") || 
          header.includes("camera") || header.includes("ram") || 
          header.includes("storage") || header.includes("weight") ||
          header.includes("refresh") || header.includes("charging") ||
          header.includes("screen") || header.includes("front_camera")) {
        phone[header] = parseFloat(value);
      } else if (header === "has_5g") {
        phone[header] = value.toLowerCase() === "true";
      } else {
        phone[header] = value;
      }
    });

    phones.push(phone as PhoneData);
  }

  return phones;
}

/**
 * Parse a CSV line handling quoted values
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Get phones by price range
 */
export function getPhonesByPriceRange(priceRange: string): PhoneData[] {
  const phones = loadPhonesFromCSV();
  return phones.filter(phone => phone.price_range === priceRange);
}

/**
 * Get phones within budget
 */
export function getPhonesInBudget(maxBudget: number): PhoneData[] {
  const phones = loadPhonesFromCSV();
  return phones.filter(phone => phone.price_inr <= maxBudget);
}

/**
 * Get phones by brand
 */
export function getPhonesByBrand(brand: string): PhoneData[] {
  const phones = loadPhonesFromCSV();
  return phones.filter(phone => 
    phone.brand.toLowerCase() === brand.toLowerCase()
  );
}

/**
 * Search phones by name
 */
export function searchPhones(query: string): PhoneData[] {
  const phones = loadPhonesFromCSV();
  const lowerQuery = query.toLowerCase();
  return phones.filter(phone => 
    phone.name.toLowerCase().includes(lowerQuery) ||
    phone.brand.toLowerCase().includes(lowerQuery)
  );
}
