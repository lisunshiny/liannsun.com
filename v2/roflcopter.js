

MENU_ITEMS = {
  idk: {
    markdown_file: "bios/idk.md",
    label: "",
    uri_extension: "",
    title: "",
    image_src: "assets/me.png"


  },
  stalker: {
    markdown_file: "bios/internet_stalker.md",
    label: "stalker",
    uri_extension: "stalker",
    title: "so umm wow you are honest",
    image_src: "assets/me-meme.png"
  },

  romantic_interest: {
    markdown_file: "bios/romantic_interest.md",
    label: "romantic interest",
    uri_extension: "romantic_interest",
    title: "so I am a normal person",
    image_src: "assets/me-climbing.png"
  },

  recruiter: {
    markdown_file: "bios/tech_recruiter.md",
    label: "tech recruiter",
    uri_extension: "recruiter",
    title: "so I am a software engineer",
    image_src: "assets/me.png"

  },
  networker: {
    markdown_file: "bios/networker.md",
    label: "networker",
    uri_extension: "networker",
    title: "so I am a software engineer",
    image_src: "assets/me-selfie.png"

  },
  friend: {
    markdown_file: "bios/friend.md",
    label: "friend",
    uri_extension: "friend",
    title: "so you know who I am",
    image_src: "assets/me-child-2.png"
  },

}
$(function () {

  const updateSite = (item) => {
    document.getElementById('me-section').innerHTML = item.title
    $('#me-picture').attr("src", item.image_src)
    fetch(item.markdown_file).then((response => {
      return response.text()
    })).then((text) => {
      document.getElementById('conditional-text').innerHTML = marked.parse(text)
    })
  }

  // updateBodyText(MENU_ITEMS.recruiter.markdown_file)

  $("#cars").change((el) => {
    $(".intro").hide()
    var key = $('option:selected').data("bio");
    item = MENU_ITEMS[key]
    if (item !== undefined) {
      updateSite(item)
    }
  })

  $(".hamburger").click((el) => {
    $(".links").toggle()
  })

  $( window ).on("resize", () => {
    // debugger;
    if (window.innerWidth > 768) {
      $(".links").show()
    } else {
      $(".links").hide()
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
