

MENU_ITEMS = {
  stalker: {
    markdown_file: "bios/internet_stalker.md",
    label: "romantic interest",
    uri_extension: "stalker",
    title: "I am a (mostly) normal person?"


  },
  recruiter: {
    markdown_file: "bios/tech_recruiter.md",
    label: "tech recruiter",
    uri_extension: "recruiter",
    title: "I am a software engineer"
  },
  networker: {
    markdown_file: "bios/networker.md",
    label: "networker",
    uri_extension: "networker",
    title: "3."

  },
  friend: {
    markdown_file: "bios/friend.md",
    label: "friend",
    uri_extension: "friend",
    title: "you know who I am"
  },

}
$(function () {

  const updateSite = (item) => {
    document.getElementById('me-section').innerHTML = item.title
    fetch(item.markdown_file).then((response => {
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
      updateSite(item)
    }
  })
  // updateBodyText(MENU_ITEMS.recruiter.markdown_file)
  // updateBodyText(MENU_ITEMS.recruiter.markdown_file)

  // fetch('bios/internet_stalker.md').then((response => {
  //   return response.text()
  // })).then((text) => {
  //   document.getElementById('content').innerHTML = marked.parse(text)
  // })


  // document.getElementById('content').innerHTML = "blah"
});
