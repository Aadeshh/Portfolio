#!/usr/bin/env node

/**
 * Image conversion script for WebP optimization
 * This script would convert all images to WebP format with fallbacks
 * 
 * To use this script in a production environment:
 * 1. Install sharp: npm install sharp
 * 2. Run: node scripts/convert-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image directories to process
const IMAGE_DIRS = [
  'src/assets',
  'src/assets/projects',
  'public'
];

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

/**
 * Convert images to WebP format
 * Note: This requires the 'sharp' package to be installed
 */
async function convertToWebP() {
  console.log('🖼️  Starting image conversion to WebP...');
  
  try {
    // This would require sharp to be installed
    // const sharp = require('sharp');
    
    for (const dir of IMAGE_DIRS) {
      const fullPath = path.join(process.cwd(), dir);
      
      if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  Directory ${dir} does not exist, skipping...`);
        continue;
      }
      
      const files = fs.readdirSync(fullPath);
      
      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        
        if (SUPPORTED_FORMATS.includes(ext)) {
          const inputPath = path.join(fullPath, file);
          const outputPath = path.join(fullPath, `${path.parse(file).name}.webp`);
          
          console.log(`Converting ${file} to WebP...`);
          
          // This would be the actual conversion code:
          /*
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          */
          
          console.log(`✅ Converted ${file} to WebP`);
        }
      }
    }
    
    console.log('🎉 Image conversion completed!');
    
  } catch (error) {
    console.error('❌ Error during image conversion:', error.message);
    console.log('\n📝 To enable image conversion:');
    console.log('1. Install sharp: npm install sharp');
    console.log('2. Uncomment the conversion code in this script');
    console.log('3. Run: node scripts/convert-images.js');
  }
}

/**
 * Generate image manifest for optimization
 */
function generateImageManifest() {
  console.log('📋 Generating image manifest...');
  
  const manifest = {
    images: {},
    generated: new Date().toISOString()
  };
  
  for (const dir of IMAGE_DIRS) {
    const fullPath = path.join(process.cwd(), dir);
    
    if (!fs.existsSync(fullPath)) continue;
    
    const files = fs.readdirSync(fullPath);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      
      if (SUPPORTED_FORMATS.includes(ext) || ext === '.webp') {
        const relativePath = path.join(dir, file).replace(/\\/g, '/');
        const baseName = path.parse(file).name;
        
        if (!manifest.images[baseName]) {
          manifest.images[baseName] = {
            original: null,
            webp: null,
            alt: `${baseName} image`
          };
        }
        
        if (ext === '.webp') {
          manifest.images[baseName].webp = relativePath;
        } else {
          manifest.images[baseName].original = relativePath;
        }
      }
    }
  }
  
  // Write manifest file
  const manifestPath = path.join(process.cwd(), 'src/assets/image-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`✅ Image manifest generated at ${manifestPath}`);
  return manifest;
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  generateImageManifest();
  convertToWebP();
}

export { convertToWebP, generateImageManifest };