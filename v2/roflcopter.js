

MENU_ITEMS = {
  stalker: {
    markdown_file: "bios/internet_stalker.md",
    label: "romantic interest",
    uri_extension: "stalker"
  },
  recruiter: {
    markdown_file: "bios/tech_recruiter.md",
    label: "tech recruiter",
    uri_extension: "recruiter"
  },
  networker: {
    markdown_file: "bios/networker.md",
    label: "networker",
    uri_extension: "networker"
  },
  friend: {
    markdown_file: "bios/friend.md",
    label: "friend",
    uri_extension: "friend"
  },

}
$(function () {

  const updateBodyText = (markdownPath) => {
    console.log(markdownPath)
    fetch(markdownPath).then((response => {
      return response.text()
    })).then((text) => {
      document.getElementById('content').innerHTML = marked.parse(text)
    })
  }

  updateBodyText(MENU_ITEMS.recruiter.markdown_file)

  $("a").click((el) => {
    const key = $(el.target).data("bio")
    item = MENU_ITEMS[key]
    if (item !== undefined) {
      updateBodyText(item.markdown_file)
    }
  })
  // fetch('bios/internet_stalker.md').then((response => {
  //   return response.text()
  // })).then((text) => {
  //   document.getElementById('content').innerHTML = marked.parse(text)
  // })


  // document.getElementById('content').innerHTML = "blah"
  marked.parse('# Marked in the browser\n\nRendered by **marked**.');
});
