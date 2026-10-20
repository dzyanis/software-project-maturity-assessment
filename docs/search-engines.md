# Registering the website with search engines

Site: `https://dzyanis.github.io/service_audit/`

Sitemap: `https://dzyanis.github.io/service_audit/sitemap.xml`

MkDocs generates the sitemap, canonical URLs, page titles, and static HTML.
Registration requires the site owner's Google and Microsoft accounts. The
verification fields in `mkdocs.yml` are initially empty; nothing is registered
just by building the site.

## Google

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add a **URL prefix** property using the exact site URL above, including
   `/service_audit/`. This works without controlling the `github.io` DNS.
3. Choose **HTML tag** verification and copy the `content` value from the
   `google-site-verification` meta tag.
4. Put that value in `extra.search_engine_verification.google` in `mkdocs.yml`,
   keeping it quoted. Run `./scripts/test-site.sh`, commit and push to `main`,
   and wait for the Site workflow to deploy successfully.
5. Return to Search Console and click **Verify**.
6. In **Sitemaps**, submit the sitemap URL above.
7. Inspect the homepage URL and request indexing. Monitor indexing reports
   for crawl errors; submission does not guarantee inclusion or ranking.

Keep the verification value in the configuration after verification so Google
can recheck ownership.

See Google's [Search Console getting started guide](https://developers.google.com/search/docs/monitor-debug/search-console-start).

## Bing

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Import the verified site from Google Search Console, or add the site
   manually and select HTML meta tag verification.
3. For manual verification, copy the `msvalidate.01` tag's `content` value into
   `extra.search_engine_verification.bing` in `mkdocs.yml`, build and deploy
   as above, then click **Verify**.
4. Check that the sitemap URL above is listed in **Sitemaps**; submit it if
   it was not imported.

See Bing's [setup guide](https://blogs.bing.com/webmaster/2025/6/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility/).

Bing is also useful for broader discovery: DuckDuckGo says its traditional
links and images are [largely sourced from Bing](https://duckduckgo.com/duckduckgo-help-pages/results/sources).
Other independent search engines may discover the site through public links;
these registrations do not guarantee inclusion in every engine.

## GitHub Pages and robots.txt

Crawlers read `https://dzyanis.github.io/robots.txt`, not the file at
`https://dzyanis.github.io/service_audit/robots.txt`. The project-level file
does not control crawling or advertise the sitemap to crawlers automatically.
Submit the sitemap through the webmaster tools above.

If you maintain a separate `dzyanis.github.io` repository serving the domain
root, its root `robots.txt` can also contain:

```text
User-agent: *
Allow: /

Sitemap: https://dzyanis.github.io/service_audit/sitemap.xml
```

Check existing rules before changing that file: it governs every project on
the same host. See Google's [robots.txt location rules](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt).
