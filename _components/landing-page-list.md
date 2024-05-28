---
attributes:
  - title: heading
    required: true
---

<Box class="landing-page-list">
  <Box class="landing-page-list-header">
    <span>{@heading}</span>
  </Box>
  <Box pad="3" class="landing-page-list-body">
    <Slot />
  </Box>
</Box>
