---
attributes:
  - title: heading
    required: true
  - title: subheading
    required: true
---

<Box pad="0" class={"landing-page-card " | append(@heading) }>
  <Box pad="4" class="landing-page-card-header">
    <span class="landing-page-card-header-title">{@heading}</span>

    {@subheading}
  </Box>
  <Box pad="4">
    <Slot />
  </Box>
</Box>
