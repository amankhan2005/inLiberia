 // src/utils/helpers.js



// Truncate text

export function truncateText(text, maxLength = 100) {

  if (!text) return "";



  if (text.length <= maxLength)

    return text;



  return text.substring(0, maxLength) + "...";

}



// Format date

export function formatDate(date) {

  return new Date(date).toLocaleDateString(

    "en-US",

    {

      year: "numeric",

      month: "short",

      day: "numeric",

    }

  );

}



// Get first image

export function getImage(images) {

  if (!images || images.length === 0)

    return "/images/placeholder.jpg";



  return images[0];

}