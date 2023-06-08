

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
    fetch(markdownPath).then((response => {
      return response.text()
    })).then((text) => {
      document.getElementById('content').innerHTML = marked.parse(text)
    })
  }

  // updateBodyText(MENU_ITEMS.recruiter.markdown_file)

  $("#cars").change((el) => {
    var key = $('option:selected').data("bio");
    console.log(key);
    item = MENU_ITEMS[key]
    if (item !== undefined) {
      updateBodyText(item.markdown_file)
    }
  })
  updateBodyText(MENU_ITEMS.recruiter.markdown_file)
  updateBodyText(MENU_ITEMS.recruiter.markdown_file)

  // fetch('bios/internet_stalker.md').then((response => {
  //   return response.text()
  // })).then((text) => {
  //   document.getElementById('content').innerHTML = marked.parse(text)
  // })


  // document.getElementById('content').innerHTML = "blah"
});
