
    const collapsedClass = "header--collapsed";
    const enlargeContainer = "enlarge-main-container";
    const mainContainer = document.querySelector(".main-container");
    const header = document.querySelector(".header");
    const body = document.querySelector(".body");
    const collapseButton = body.querySelector(".collapse-button");
    const collapseButtonIcon = collapseButton.querySelector(".fa-bars");
    const collapsedButtonIcon = collapseButton.querySelector(".fa-xmark");

    collapseButton.addEventListener("click", () => {
        header.classList.toggle(collapsedClass);
        mainContainer.classList.toggle(enlargeContainer);
        collapseButtonIcon.classList.remove("fa-bars");
        collapseButtonIcon.classList.toggle("fa-bars");
        collapseButtonIcon.classList.toggle("fa-xmark");
    });



    $(function() {
        $('#search-menu').removeClass('toggled');
    
        $('#search-icon').click(function(e) {
            e.stopPropagation();
            $('#search-icon').toggleClass('icon-removed');
            $('#search-menu').toggleClass('toggled');
            $("#popup-search").focus();
        });
        
        $('#search-menu form').click(function(e) {
            e.stopPropagation();
        });
    
        $('body').click(function() {
            $('#search-menu').removeClass('toggled');
            $('#search-icon').removeClass('icon-removed');
        });
    });

    $(function() {
        // $('.navbar-guilds-ul').remove();
        $('.navbar-guilds-ul').addClass('hidden');
    
        $('.navbar-guilds .fa-chevron-down').click(function(e) {
            // e.stopPropagation();
            $('#navbar-guilds-icon').toggleClass('fa-chevron-down');
            $('#navbar-guilds-icon').toggleClass('fa-chevron-up');
            $('.navbar-guilds-ul').toggleClass('hidden');
        });

        // $('.navbar-guilds .fa-chevron-up').click(function(e) {
        //     // e.stopPropagation();
        //     $('#navbar-guilds-icon').removeClass('fa-chevron-up');
        //     $('#navbar-guilds-icon').addClass('fa-chevron-down');
        //     $('.navbar-guilds-ul').toggleClass('hidden');
        // });
    });

    $(function() {
        $('.navbar-blog-ul').addClass('hidden');
    
        $('#navbar-blog-icon').click(function(e) {
            e.stopPropagation();
            $('#navbar-blog-icon').toggleClass('fa-chevron-down');
            $('#navbar-blog-icon').toggleClass('fa-chevron-up');
            $('.navbar-blog-ul').toggleClass('hidden');
        });

    });
