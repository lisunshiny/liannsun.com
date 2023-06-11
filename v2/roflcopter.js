

MENU_ITEMS = {
  idk: {
    markdown_file: "bios/idk.md",
    label: "",
    uri_extension: "",
    title: "",
    image_src: "assets/me.png",
    shadow_color: "#777",
    gradient_colors: ["#777", "#777", "#777"]
  },
  stalker: {
    markdown_file: "bios/internet_stalker.md",
    label: "stalker",
    uri_extension: "stalker",
    title: "so umm wow you are honest",
    image_src: "assets/me-meme.png",
    shadow_color: "#D2F46B",
    gradient_colors: ["#D2F46B", "#85f46b", "#f4ab6b"]

  },
  romantic_interest: {
    markdown_file: "bios/romantic_interest.md",
    label: "romantic interest",
    uri_extension: "romantic_interest",
    title: "so I am a normal person",
    image_src: "assets/me-climbing.png",
    shadow_color: "#F4AB6B",
    gradient_colors: ["#F4AB6B", "#fffb1e", "#ff0a0a"]
  },
  recruiter: {
    markdown_file: "bios/tech_recruiter.md",
    label: "tech recruiter",
    uri_extension: "recruiter",
    title: "so I am a software engineer",
    image_src: "assets/me.png",
    shadow_color: "#6B95F4",
    gradient_colors: ["#6B95F4", "#75edcb", "#f5aaed"]
  },
  networker: {
    markdown_file: "bios/networker.md",
    label: "networker",
    uri_extension: "networker",
    title: "so I am a software engineer",
    image_src: "assets/me.png",
    shadow_color: "#BC6BF4",
    gradient_colors: ["#BC6BF4", "#6b88f4", "#ff4da1"]
  },
  friend: {
    markdown_file: "bios/friend.md",
    label: "friend",
    uri_extension: "friend",
    title: "so you know who I am",
    image_src: "assets/me-child.png",
    shadow_color: "#6BF4CD",
    gradient_colors: ["#6BF4CD", "#2eff3a", "#deff64"]
  },

}
$(function () {

  const updateSite = (item) => {
    document.getElementById('me-section').innerHTML = item.title
    $('#me-picture').attr("src", item.image_src)
    $('#cars').css("box-shadow", ".5rem .5rem " + item.shadow_color)
    const boxCard = $(".box-card").get(0)
    boxCard.style.setProperty("--color-1", item.gradient_colors[0])
    boxCard.style.setProperty("--color-2", item.gradient_colors[1])
    boxCard.style.setProperty("--color-3", item.gradient_colors[2])
    fetch(item.markdown_file).then((response => {
      return response.text()
    })).then((text) => {
      document.getElementById('conditional-text').innerHTML = marked.parse(text)
    })
  }

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
  $("#content").click((el) => {
    if (window.innerWidth < 768) {
      $(".links").hide()
    }
  })

  $( window ).on("resize", () => {
    if (window.innerWidth > 768) {
      $(".links").show()
    } else {
      $(".links").hide()
    }
  })
});
