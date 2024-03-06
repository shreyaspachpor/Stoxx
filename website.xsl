<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Stock Prices</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h2>Stock Prices</h2>
        <table>
          <tr>
            <th>Stocks</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
          <xsl:for-each select="stocks/stock">
            <tr>
              <td><xsl:value-of select="symbol"/></td>
              <td><xsl:value-of select="price"/></td>
              <td><xsl:value-of select="timestamp"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
