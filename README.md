# React-learning-project

# Tailwind CSS Learning

- Tailwind provides many utility classes for building responsive and custom designs.
- You can easily customize the framework to suit your needs via its configuration file.
- Tailwind helps build seamless mobile-first and responsive designs.
- Tailwind CSS has a feature that removes any unused CSS, improving performance.

- Method 1: Install Tailwind CSS via npm
Follow these steps to set up Tailwind CSS in your project using npm:

Step 1: Initialize your project
npm init -y
Step 2: Install Tailwind CSS
npm install tailwindcss
Step 3: Use the @tailwind directive to inject Tailwind’s base, components, and utility styles into your CSS file.
@tailwind base;
@tailwind components;
@tailwind utilities;
Step 4: This is used to create a config file to customize the designs. It is an optional step.
npx tailwindcss init
Step 5: This command is used to compile style.css is the file that has to be compiled and output.css is the file on which it has to be compiled. If the file output.css is not created earlier then it will automatically be created.
npx tailwindcss build styles.css -o output.css
