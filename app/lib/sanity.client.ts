// app/lib/sanity.client.ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "yvqbkua0",          // hardcoded for now
  dataset: "production",          // hardcoded for now
  apiVersion: "2025-01-01",       // matches your env
  useCdn: false,                  // always hit the API for fresh content
  perspective: "published",       // only show published docs on the site
  token: process.env.SANITY_API_READ_TOKEN, // fine to keep this in env
});
