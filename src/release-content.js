// Keep the chosen document's language with its text, including legacy archives.
export function selectReleaseNotes(release, locale) {
  for (const candidate of [...new Set([locale, 'en', 'zh-CN'])]) {
    const notes = release.notes?.[candidate];
    if (typeof notes?.body === 'string' && notes.body.trim()) {
      return { ...notes, locale: candidate };
    }
  }
  return { body: typeof release.body === 'string' ? release.body : '', locale: 'zh-CN', sourceUrl: release.url };
}
