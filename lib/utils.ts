import { Phone, PhoneSchema } from "@/core/referee-engine/types";
import phonesData from "@/lib/data/phones.json";

/**
 * Loads the phone database from JSON file
 * @returns Array of validated Phone objects
 */
export function loadPhoneDatabase(): Phone[] {
    const phones: Phone[] = [];

    for (const data of phonesData) {
        const result = PhoneSchema.safeParse(data);
        if (result.success) {
            phones.push(result.data);
        } else {
            console.warn(`Invalid phone data for ${data.id}:`, result.error.errors);
        }
    }

    return phones;
}

/**
 * Get a phone by ID
 */
export function getPhoneById(id: string): Phone | undefined {
    const phones = loadPhoneDatabase();
    return phones.find(p => p.id === id);
}

/**
 * Filter phones by region
 */
export function filterByRegion(phones: Phone[], region: string): Phone[] {
    return phones.filter(phone => phone.region === region);
}

/**
 * Sort phones by price (ascending)
 */
export function sortByPrice(phones: Phone[]): Phone[] {
    return [...phones].sort((a, b) => a.price_usd - b.price_usd);
}

/**
 * Calculate absolute delta between two values
 */
export function calculateDelta(a: number, b: number): number {
    return Math.abs(a - b);
}

/**
 * Format price as USD string
 */
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
}

/**
 * Get dimension display name
 */
export function getDimensionDisplayName(dimension: string): string {
    const names: Record<string, string> = {
        battery_mah: "Battery",
        camera_mp: "Camera",
        screen_inches: "Screen Size",
        storage_gb: "Storage",
        weight_grams: "Weight",
        processor_benchmark: "Performance",
        price_usd: "Price",
        has_5g: "5G Support",
    };
    return names[dimension] || dimension;
}

/**
 * Get dimension unit
 */
export function getDimensionUnit(dimension: string): string {
    const units: Record<string, string> = {
        battery_mah: "mAh",
        camera_mp: "MP",
        screen_inches: "inches",
        storage_gb: "GB",
        weight_grams: "g",
        processor_benchmark: "pts",
        price_usd: "",
    };
    return units[dimension] || "";
}
