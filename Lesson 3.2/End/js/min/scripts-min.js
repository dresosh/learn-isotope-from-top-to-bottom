$(function(){var e=$(".notes").isotope({itemSelector:".note"}),t={notesByNumberRange:function(){var e=parseInt($(this).find(".note-number").text(),10);return e>5&&13>e},notesByDate:function(){var e=$(this).find(".note-date").text();return e.indexOf("Feb")>=0}};e.isotope({filter:t.notesByNumberRange})});