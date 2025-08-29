// Example component with dark mode support
function ExampleComponent() {
return (
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
Title
</h1>
<p className="text-gray-600 dark:text-gray-300">
Description text
</p>
<button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded">
Button
</button>
</div>
);
}

<!--
1. Common Dark Mode Classes
Here are some common Tailwind dark mode classes you'll use:

Backgrounds: bg-white dark:bg-gray-900
Text: text-gray-900 dark:text-white
Borders: border-gray-300 dark:border-gray-700
Hover States: hover:bg-gray-100 dark:hover:bg-gray-800
Shadows: shadow-lg dark:shadow-gray-900/20

-->
