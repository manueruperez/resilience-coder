$(document).ready(function () {
  $.getJSON("blogs/index.json", function (data) {
    const blogs = data.blogs;
    const container = $("#shorts-content");
    $.each(blogs, function (index, blog) {
      const titleForUrl = encodeURIComponent(blog.title);
      $.getJSON(`blogs/${titleForUrl}/data.json`, function (blogData) {
        const blogHtml = `
            <div class="col-md-12">
              <div class="mb-4 item">
                <a class="radius-1 shadow-inner d-block" href="${blogData.blogUrl}">
                  <div class="p-2">
                    <div class="shadow radius-1">
                    ${blogData.interactiveCode}
                    </div>
                  </div>
                </a>
              </div>
              <div class="mb-1">
                <h1 class="h5 font-weight-500 d-inline-block">
                  <a href="${blogData.blogUrl}">${blogData.title}</a>
                </h1>
                <span class="d-inline-block shadow-inner text-secondary radius-1 font-size-13 mb-3 mb-lg-0 px-3">${blogData.date}</span>
              </div>
              <hr class="mt-3 mb-3" />
              <p>${blogData.summary}</p>
              <div class="outer radius-2 d-inline-block">
                <a href="${blogData.blogUrl}" class="inner radius-2 d-block px-4 py-2 font-size-14 text-alt font-weight-500">
                  Read more
                </a>
              </div>
            </div>
            <div class="col-md-12 mt-4 mb-6">
              <hr class="divider divider-md divider-center" />
            </div>`;
        container.append(blogHtml);
        container.find(".instagram-media").css({
          "max-width": "100%",
          width: "auto !important",
          margin: "auto",
        });
      }).fail(function () {
        console.log(
          "No se pudo cargar el archivo JSON para el blog titulado: " +
            blog.title
        );
      });
    });
  });
});

// blog list code
/* <div class="row mt-7">
  <div class="col text-center">
    <ul class="list-inline blog-nav mb-0">
      <li class="outer radius-2 list-inline-item mr-1">
        <a class="inner btn btn-round btn-icon" target="_blank" href="#">
          <span class="fa fa-angle-left btn-icon-inner"></span>
        </a>
      </li>
      <li class="outer radius-2 list-inline-item mr-1">
        <a class="inner btn btn-round btn-icon" href="index.html#portfolio">
          <span class="btn-icon-inner">1</span>
        </a>
      </li>
      <li class="outer active radius-2 list-inline-item mr-1">
        <a
          class="inner active btn btn-round btn-icon"
          href="index.html#portfolio"
        >
          <span class="btn-icon-inner text-secondary">2</span>
        </a>
      </li>
      <li class="outer radius-2 list-inline-item mr-1">
        <a class="inner btn btn-round btn-icon" href="index.html#portfolio">
          <span class="btn-icon-inner">3</span>
        </a>
      </li>
      <li class="outer radius-2 list-inline-item mr-1">
        <a class="inner btn btn-round btn-icon" target="_blank" href="#">
          <span class="fa fa-angle-right btn-icon-inner"></span>
        </a>
      </li>
    </ul>
  </div>
</div>; */
