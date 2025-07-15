<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Contact Form Response - Koala Foundation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">

    <header>
      <h1>Thank You for Contacting Us!</h1>
      <nav>
        <ul>
          <li><a href="koala_home.html">Home</a></li>
          <li><a href="about.html">Save Koalas!</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="adopt.html">Adopt</a></li>
          <li><a href="contact.html" aria-current="page">Contact Us</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="contact-form">
        <h2>Submission Summary</h2>
        <p class="colorRed">This page was created by PHP on the server and sent back to your browser.</p>

        <table style="width:100%; border-collapse: collapse; margin-top: 2rem;" border="1">
          <tr style="background-color: #eef6ee;">
            <th style="padding: 1rem; border: 1px solid #2a4d2e;">Field Name</th>
            <th style="padding: 1rem; border: 1px solid #2a4d2e;">Value Entered</th>
          </tr>

          <?php
          foreach($_POST as $key => $value) {
            $cleanKey = htmlspecialchars($key);
            $cleanValue = nl2br(htmlspecialchars($value));
            echo "<tr>";
            echo "<td style='padding: 0.75rem; border: 1px solid #2a4d2e;'>$cleanKey</td>";
            echo "<td style='padding: 0.75rem; border: 1px solid #2a4d2e;'>$cleanValue</td>";
            echo "</tr>";
          }
          ?>
        </table>

        <p style="margin-top: 2rem;"><a href="contact.html">← Back to Contact Form</a></p>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 All rights reserved. Australian Koala Foundation
        <img src="images/koala_logo.svg" alt="Koala Foundation Logo" />
      </p>
      <p><a href="koala_home.html">Back to Home</a></p>
    </footer>

  </div>
</body>
</html>
