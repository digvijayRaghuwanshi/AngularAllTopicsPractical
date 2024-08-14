function changeHeader() {
    if ($(window).width() <= 1199) {
        $(".header").addClass("header--compressed");
    } else {
        $(".header").removeClass("header--compressed");
    }
}
function doNav(url) {
    // shouldHideSidebar();
    document.location.href = url;
}
//wire vertical tabs -horizontal for smaller resolutions
function changeTabs() {
    if ($(window).width() >= 992) {
        $("#verticalTab").addClass("tabs--vertical");
    } else {
        $("#verticalTab").removeClass("tabs--vertical");
    }
}

// function openModal(id) {
//     $("#modal-backdrop").removeClass("hide");
//     $("#" + id).before("<div id="" + id + " - placeholder"></div>").detach().appendTo("body").removeClass("hide");
// }
// function closeModal(id) {
//     $("#" + id).detach().prependTo(("#" + id + "-placeholder")).addClass("hide");
//     $("#modal-backdrop").addClass("hide");
// }

$(document).ready(function() {
    // Wire the header sidebar toggle buttonv
    $(".toggle-menu").click(function() {
        //console.log("dsdsd");
        $("#styleguideSidebar").toggleClass("sidebar--hidden");
    });

    // Wire the sidebar drawer open/close toggles
    $("#styleguideSidebar .sidebar__drawer > a").click(function() {
        $(this).parent().toggleClass("sidebar__drawer--opened");
    });

    // Wire the sidebar selected item
    $("#styleguideSidebar .sidebar__item > a").click(function() {
        $("#styleguideSidebar .sidebar__item").removeClass("sidebar__item--selected");
        $(this).parent().addClass("sidebar__item--selected");
    });

    // Wire the sidebar examples
    $("main .sidebar__drawer > a").click(function() {
        $(this).parent().toggleClass("sidebar__drawer--opened");
    });
    $("main .sidebar__item > a").click(function() {
        $(this).parent().siblings().removeClass("sidebar__item--selected");
        $(this).parent().addClass("sidebar__item--selected");
    });

    // Wire the button group examples
    $("main .btn-group .btn").click(function() {
        //  $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
    });

    // Wire the markup toggles
    $("main .markup-chevron").removeClass("icon-chevron-up").addClass("icon-chevron-down");
    $("main .markup-toggle").click(function() {
        $(this).parent().next().toggleClass("hide");
        $(this).next().toggleClass("hide").removeClass("text-blue").text("Copy");
        // Toggle the clipboard copy. Should only display when code is viewable
        $(this).toggleClass("toggled");

        if ($(this).hasClass("toggled")) {
            $(this).find(".markup-chevron").removeClass("icon-chevron-down").addClass("icon-chevron-up");

        } else if (!$(this).hasClass("toggled")) {
            $(this).find(".markup-chevron").removeClass("icon-chevron-up").addClass("icon-chevron-down");

        }
    });

    // Wire the markup clipboard
    $("main .clipboard-toggle").click(function() {
        clipboard.copy($(this).parent().parent().find("code.code-raw").text());
        $(this).addClass("text-blue").text("Copied!");
    });

    // Wire the dropdown examples
    $(".dropdown").click(function(e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        // $(".notifyDD").hide();
    });

    // Wire the dropdown-menu
    $(".dropdown .dropdown__menu a").click(function(e) {
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
    });

    //----------------------------for personlize view-----------------------------------
    // Wire the default icon in dropdown-menu
    $(".dropdown .dropdown__menu a .defaultBtn").click(function(e) {
        $(this).parent(".dropdown .dropdown__menu a").addClass("default").siblings().removeClass("default");
        $(this).attr("data-balloon", "Default view");
    });

    // Wire the  personlise view tabs
    $(".view_tabs li").click(function(e) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    //wire View tabs in personalize view
    $(".view_tabs ul li").click(function() {
        var tab_id = $(this).attr("data-tab");
        $(".view_tabs ul li").removeClass("active");
        $(".tab-content .tab-pane").removeClass("active");

        $(this).addClass("active");
        $("#" + tab_id).addClass("active");
    });

    //Wire page title dropdown

    $("h6.pageTitle .dropdown .dropdown__menu a").click(function() {
        $(this).parent().addClass("selected");
        $(this).parent().siblings().removeClass("selected");
    });

    //---------------------------------------------------------------

    // Close dropdowns on clicks outside the dropdowns
    // $(document).click(function() {
    //     $("main .dropdown").removeClass("active");
    //	});

    //Wire reassign filter for My Reassignments
    $("#filterIcon1 ").click(function() {
        $(this).parent().show();
        $("#reassignFilters1").toggle();
        $(this).children("span").toggleClass("icon-chevron-down").toggleClass("icon-chevron-up");
    });
    $(".filterClose ").click(function() {
        $("#filterIcon ").parent().show();
        $("#reassignFilters").hide();
    });

    //Wire reassign filter for Reassigned To Me
    $("#filterIcon2 ").click(function() {
        $(this).parent().show();
        $("#reassignFilters2").toggle();
        $(this).children("span").toggleClass("icon-chevron-down").toggleClass("icon-chevron-up");
    });
    $(".filterClose ").click(function() {
        $("#filterIcon ").parent().show();
        $("#reassignFilters").hide();
    });

    // $(".memberName").popover({ trigger: "manual", html: true, animation: false })
    //     .on("mouseenter", function() {
    //         var _this = this;
    //         $(this).popover("show");
    //         $(".popover").on("mouseleave", function() {
    //             $(_this).popover("hide");
    //         });
    //     }).on("mouseleave", function() {
    //         var _this = this;
    //         setTimeout(function() {
    //             if (!$(".popover:hover").length) {
    //                 $(_this).popover("hide");
    //             }
    //         }, 300);
    //     });

    // $(".thPophover").popover({ trigger: "manual", html: true, animation: false })
    //     .on("mouseenter", function() {
    //         var _this = this;
    //         $(this).popover("show");
    //         $(".popover").on("mouseleave", function() {
    //             $(_this).popover("hide");
    //         });
    //     }).on("mouseleave", function() {
    //         var _this = this;
    //         setTimeout(function() {
    //             if (!$(".popover:hover").length) {
    //                 $(_this).popover("hide");
    //             }
    //         }, 300);
    //     });

    // Wire the modal examples
    $("main #modal-deleteNote-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-deleteNote").removeClass("hide");
    });
    $(" #modal-deleteNote-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-deleteNote").addClass("hide");
    });
    //L1 popup
    $("main #modal-L1-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-L1").removeClass("hide");
    });
    $(" #modal-L1-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-L1").addClass("hide");
    });
    //instructions popup
    $("#modal-instructions-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-instructions").addClass("hide");
    });
    //subscription popup
    $("main #modal-subscription-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-subscription").removeClass("hide");
    });
    $("#modal-subscription-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-subscription").addClass("hide");
    });
    //view subscription popup
    $("main #modal-subscriptionV-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-subscriptionV").removeClass("hide");
    });
    $("#modal-subscriptionV-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-subscriptionV").addClass("hide");
    });
    //Edit subscription popup
    $("main #modal-subscriptionE-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-subscriptionE").removeClass("hide");
    });
    $("#modal-subscriptionE-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-subscriptionE").addClass("hide");
    });
    //Delete subscription popup
    $("main #modal-subscriptionD-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-subscriptionD").removeClass("hide");
    });
    $("#modal-subscriptionD-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-subscriptionD").addClass("hide");
    });

    //Add Reference links popup
    $("main #modal-referenceA-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-referenceA").removeClass("hide");
    });
    $("#modal-referenceA-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-referenceA").addClass("hide");
    });

    //Edit Reference links popup
    $("main #modal-referenceE-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-referenceE").removeClass("hide");
    });
    $("#modal-referenceE-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-referenceE").addClass("hide");
    });

    //Delete Reference links popup
    $("main #modal-referenceD-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-referenceD").removeClass("hide");
    });
    $("#modal-referenceD-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-referenceD").addClass("hide");
    });

    //Accept Reassignment popup
    $("main #modal-reassignmentA-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-reassignmentA").removeClass("hide");
    });
    $("#modal-reassignmentA-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-reassignmentA").addClass("hide");
    });

    //Reject Reassignment popup
    $("main #modal-reassignmentR-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-reassignmentR").removeClass("hide");
    });
    $("#modal-reassignmentR-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-reassignmentR").addClass("hide");
    });

    //psl popup
    $("main #modal-psl-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-psl").removeClass("hide");
    });
    $("#modal-psl-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-psl").addClass("hide");
    });

    //legend info popup
    $("main #modal-legendInfo-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-legendInfo").removeClass("hide");
    });
    $("#modal-legendInfo-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-legendInfo").addClass("hide");
    });
    //bomAnalysis popup
    $("main .modal-bomAnalysis-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-bomAnalysis").removeClass("hide");
    });
    $(".modal-bomAnalysis-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-bomAnalysis").addClass("hide");
    });
    $("#modal-bomAnalysis .chip ").click(function() {
        $(".chip").removeClass("selected");
        $(this).addClass("selected");
        $(".chipsForm").hide();
        $(this).parents().next(".chipsForm").show();
    });

    //CPN Risk Analysis info popup
    $("main #modal-cpnRisk-Open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-cpnRisk").removeClass("hide");
    });
    $("#modal-cpnRisk-Close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-cpnRisk").addClass("hide");
    });
    //edit navigation popup - admin

    $("main .modal-editNav1-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-editNav1").removeClass("hide");
    });
    $(".modal-editNav1-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-editNav1").addClass("hide");
    });
    $("main .modal-editNav2-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-editNav2").removeClass("hide");
    });
    $(".modal-editNav2-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-editNav2").addClass("hide");
    });
    $("main .modal-editNav3-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-editNav3").removeClass("hide");
    });
    $(".modal-editNav3-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-editNav3").addClass("hide");
    });
    $("main .modal-editNav3E-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-editNav3E").removeClass("hide");
    });
    $(".modal-editNav3E-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-editNav3E").addClass("hide");
    });

    //add Child navigation popup - admin
    $("main .modal-addChildNav-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-addChildNav").removeClass("hide");
    });
    $(".modal-addChildNav-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-addChildNav").addClass("hide");
    });

    //add alternate MPN popup
    $("main #modal-add-alt-MPN-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-add-alt-MPN").removeClass("hide");
    });
    $("#modal-add-alt-MPN-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-add-alt-MPN").addClass("hide");
    });

    //comment popup in reassignments to me
    $("main #modal-comment-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-comment").removeClass("hide");
    });
    $("#modal-comment-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-comment").addClass("hide");
    });
    //Burst Notification popup -
    $("main #modal-blastNotify-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-blastNotify").removeClass("hide");
    });
    $("#modal-blastNotify-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-blastNotify").addClass("hide");
    });

    //search facets accordion

    $(".searchLeftfacets .faceTitle").click(function() {
        $(this).toggleClass("faceTitle-open");
        $(this).next(".faceContent").toggle();
    });

    //grid-card toggle

    $(".icon-thumbnail-view").click(function() {
        $(".cardView").show();
        $(".gridView").hide();
    });
    $(".icon-tables").click(function() {
        $(".cardView").hide();
        $(".gridView").show();
    });

    //Manage Tooltip popup
    $("main #modal-tooltip-Open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-tooltip").removeClass("hide");
    });

    $("#modal-tooltip-Close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-tooltip").addClass("hide");
    });

    //Manage Overlay popup
    $("main #modal-overlay-Open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-overlay").removeClass("hide");
    });

    $("#modal-overlay-Close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-overlay").addClass("hide");
    });

    //Project Documents Add_Files popup
    $("main #addFiles_modal_open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#addFiles_modal").removeClass("hide");
    });

    $("#addFiles_modal_close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#addFiles_modal").addClass("hide");
    });

    //Project Documents Edit_Files popup
    $("main #editFiles_modal_open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#editFiles_modal").removeClass("hide");
    });

    $("#editFiles_modal_close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#editFiles_modal").addClass("hide");
    });

    //Project Documents Delete_Files popup
    $("main #delFiles_modal_open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#delFiles_modal").removeClass("hide");
    });

    $("#delFiles_modal_close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#delFiles_modal").addClass("hide");
    });

    //cpn override popup
    $("main #modal-override-cpnRisk-open").click(function() {
        $(".modal-backdrop").removeClass("hide");
        $("#modal-override-cpnRisk").removeClass("hide");
    });

    $(".modal-override-cpnRisk-close").click(function() {
        $(".modal-backdrop").addClass("hide");
        $("#modal-override-cpnRisk").addClass("hide");
    });

    // Wire the dropdown / select examples
    $("main .dropdown.actionDD a.link").click(function(e) {
        e.stopPropagation();
        $(this).parent().toggleClass("active");
    });

    $(" .dropdown .select input").click(function(e) {
        e.stopPropagation();
        $(this).parent().parent().toggleClass("active");
    });
    $(".dropdown .select ~.dropdown__menu a").click(function(e) {
        e.stopPropagation();

        // Check multi-select
        var cb = $(this).find("label.checkbox input");
        if (cb.length) {
            cb.prop("checked", !cb.prop("checked"));
            if (cb[0].id === "global-animation") {
                $("body").toggleClass("cui--animated");
            } else if (cb[0].id === "global-headermargins") {
                $("body").toggleClass("cui--headermargins");
            } else if (cb[0].id === "global-spacing") {
                $("body").toggleClass("cui--compressed");
            } else if (cb[0].id === "global-wide") {
                $("body").toggleClass("cui--wide");
            }
        } else { // Single select
            e.stopPropagation();
            var origVal = $(this).parent().parent().find("input").val();
            var newVal = $(this).text();

            $(this).parent().find("a").removeClass("selected");
            $(this).addClass("selected");
            $(this).parent().parent().find("input").val($(this).text());
            $(this).parent().parent().removeClass("active");

            var obj = $(this).parent().parent().find("input");
            if (obj[0].id === "select-change-version") {
                if (origVal !== newVal) {
                    $("#uikit-css").attr("href", $(this).attr("data-value"));
                }
            }
        }
    });
    // Close dropdowns on clicks outside the dropdowns
    $(document).click(function() {
        $(" .dropdown").removeClass("active");
    });
    // Listen of window changes and close the sidebar if necessary
    $(window).resize(function() {
        //  shouldHideSidebar();
        changeHeader();
        changeTabs();
    });

    //shouldHideSidebar();
    changeHeader();
    changeTabs();

    //Clear All for Facets Drawer Selection
    $(".clearAll").click(function() {
        $(".faceContent li button").removeClass("selected");
    });

    // Create Mitigation
    $(".create").click(function() {
        $(this).hide();
        $(".cancel").show();
        $(".bmaNumber").show();
    });

    //Delete Mitigation
    $(".cancel").click(function() {
        $(this).hide();
        $(".create").show();
        $(".bmaNumber").hide();
    });

    //Add BMA Proxy
    $(".addBma").click(function() {
        $(this).hide();
        $(".bmaInput").addClass("d-inlineBlock");
    });

    $(".btnAddProxy").click(function() {
        $(".bmaInput").hide();
        $(".whenEdit").show();
    });

    $(".mitigateBtn").click(function() {
        $(this).addClass("disabled");
        $(".no-mitigateBtn").removeClass("disabled");
        $(".addEnable").removeClass("disabled");
    });

    $(".no-mitigateBtn").click(function() {
        $(this).addClass("disabled");
        $(".addEnable").addClass("disabled");
        $(".mitigateBtn").removeClass("disabled");
    });

    $(".showData").click(function() {
        $("#cardView").removeClass("noDisplay");
    });

    //Mitigation Cards Accordian
    $(".toggle-cards").click(function() {
        if ($(this).hasClass("icon-chevron-up")) {
            $(this).removeClass("icon-chevron-up").addClass("icon-chevron-down");
            $(this).closest(".row").nextUntil(".row").slideUp();
        } else {
            $(this).removeClass("icon-chevron-down").addClass("icon-chevron-up");
            $(this).closest(".row").nextUntil(".row").slideDown();
        }
    });

    //Metrix Accordian
    $(".accHeader").click(function() {
        if ($(this).hasClass("active")) {
            $(this).children().find(".accorBtn").removeClass("icon-add-outline").addClass("icon-remove-outline");
        } else {
            $(this).children().find(".accorBtn").removeClass("icon-remove-outline").addClass("icon-add-outline");
        }
    });

    //Expand-Collapse Graph View
    $(".toggleGraph").click(function() {
        if ($(this).hasClass("icon-chevron-up")) {
            $(".graph").toggle();
            $(this).hide();
            $(".centerAlign.bottomAlign").removeClass("bottomAlign");
            $(".toggleGraph.icon-chevron-down").show();
        } else {
            $(".graph").toggle();
            $(this).hide();
            $(".centerAlign.col-1").addClass("bottomAlign");
            $(".toggleGraph.icon-chevron-up").show();
        }
    });

    //Hide-Show Refine-By
    $(".refine-btn").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".refine-view").hide();
            $(".table-view").removeClass("col-10 col-md-8 col-lg-9 col-xl-10 col-sm-7").
            addClass("col-12 col-md-12 col-lg-12 col-xl-12 col-sm-12");
        } else {
            $(this).addClass("active");
            $(".refine-view").show();
            $(".table-view").removeClass("col-12 col-md-12 col-lg-12 col-xl-12 col-sm-12").
            addClass("col-10 col-md-8 col-lg-9 col-xl-10 col-sm-7");
        }
    });

    $(".showEditBox1").click(function() {
        $(".editSection1").toggleClass("noDisplayI");
        $(".editableCard1").toggle();
    });
    $(".update1").click(function() {
        $(".editSection1").toggleClass("noDisplayI");
        $(".editableCard1").toggle();
    });
    $(".cancel1").click(function() {
        $(".editSection1").toggleClass("noDisplayI");
        $(".editableCard1").toggle();
    });

    $(".showEditBox2").click(function() {
        $(".editSection2").toggleClass("noDisplayI");
        $(".editableCard2").toggle();
    });
    $(".update2").click(function() {
        $(".editSection2").toggleClass("noDisplayI");
        $(".editableCard2").toggle();
    });
    $(".cancel2").click(function() {
        $(".editSection2").toggleClass("noDisplayI");
        $(".editableCard2").toggle();
    });

    //Cancel BMA Proxy
    $(".reverse-addBma").click(function() {
        $(".addBma").show();
        $(".bmaInput").removeClass("d-inlineBlock");
    });

    //Table Leve-2 Create-Delete Mitigation
    $(".inner-create").click(function() {
        $(this).toggle();
        $(".inner-cancel").toggleClass("D-inlineBlock");
        $(".inner-addEnable").removeClass("disabled");
    });
    $(".inner-cancel").click(function() {
        $(this).toggle().removeClass("D-inlineBlock");
        $(".inner-create").toggle();
        $(".inner-addEnable").addClass("disabled");
    });

    $(".allData, .dataTitle, .allData1, .allData2, .allData3, .allData4, .allData5, .allData6, .viewAllData").hide();

    $(".moreData").click(function() {
        $(".allData").show();
        $(".moreData").hide();
    });

    $(".moreData1").click(function() {
        $(".allData1").show();
        $(".moreData1").hide();
    });

    $(".moreData2").click(function() {
        $(".allData2").show();
        $(".moreData2").hide();
    });

    $(".moreData3").click(function() {
        $(".allData3").show();
        $(".moreData3").hide();
    });

    $(".moreData4").click(function() {
        $(".allData4").show();
        $(".moreData4").hide();
    });

    $(".moreData5").click(function() {
        $(".allData5").show();
        $(".moreData5").hide();
    });

    $(".moreData6").click(function() {
        $(".allData6").show();
        $(".moreData6").hide();
    });

    $(".viewAll").click(function() {
        $(".viewAllData").show();
        $(".viewLessData").hide();
        $(this).hide();
    });

    $(".viewLess").click(function() {
        $(".viewAllData").hide();
        $(".viewLessData, .viewAll").show();
        $(this).hide();
    });

});
