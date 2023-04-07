<?php
/**
 * Title: Featured Blog
 * Slug: featured-blog
 * Description: 
 * Categories: featured
 * Keywords: 
 * Viewport Width: 1280
 * Block Types: 
 * Post Types: 
 * Inserter: true
 */

?>
<!-- wp:group {"layout":{"type":"default"}} -->
<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","right":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|50"},"blockGap":"var:preset|spacing|30"},"color":{"background":"#ffd100"}},"layout":{"type":"default"}} -->
<div class="wp-block-group has-background" style="background-color:#ffd100;padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"style":{"typography":{"fontSize":"4rem","fontStyle":"normal","fontWeight":"100","letterSpacing":"2px"}},"anchor":"featured-blog-news"} -->
<h2 class="wp-block-heading" id="featured-blog-news" style="font-size:4rem;font-style:normal;font-weight:100;letter-spacing:2px">Featured <strong>Blog</strong> News</h2>
<!-- /wp:heading --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"typography":{"fontSize":"1.2rem","fontStyle":"normal","fontWeight":"200","letterSpacing":"2px"}}} -->
<p style="font-size:1.2rem;font-style:normal;font-weight:200;letter-spacing:2px">The&nbsp;<em><strong>Query Loop block</strong></em>&nbsp;is an advanced block that allows you to display posts based on specified parameters; <strong>like a PHP loop without the code.</strong> You can think of it as a more complex and powerful&nbsp;<strong><em>Latest Posts Block</em>.</strong> With various block patterns integrated into the block setup, you can do things like create a portfolio or a page full of your favorite recipes.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:query {"queryId":16,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"list"}} -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"25%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:25%"><!-- wp:post-featured-image {"isLink":true,"aspectRatio":"auto","width":"100%","height":"230px","style":{"border":{"radius":{"topLeft":"100px","bottomRight":"50px","topRight":"20px"}}}} /--></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"75%","style":{"spacing":{"padding":{"top":"var:preset|spacing|30","right":"var:preset|spacing|30","bottom":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:75%"><!-- wp:post-title {"isLink":true,"style":{"typography":{"fontStyle":"normal","fontWeight":"600","letterSpacing":"1px"}},"fontFamily":"system-font"} /-->

<!-- wp:post-date {"style":{"typography":{"fontStyle":"normal","fontWeight":"600","letterSpacing":"1px"},"color":{"text":"#f10827"},"spacing":{"padding":{"bottom":"var:preset|spacing|30","top":"0"}}},"fontFamily":"system-font"} /-->

<!-- wp:post-excerpt {"moreText":"Read More...","style":{"typography":{"fontSize":"1.4rem","fontStyle":"normal","fontWeight":"200","letterSpacing":"1px"}},"textColor":"contrast"} /-->

<!-- wp:separator {"style":{"spacing":{"margin":{"top":"var:preset|spacing|30","bottom":"0"}}},"backgroundColor":"contrast","className":"is-style-wide"} -->
<hr class="wp-block-separator has-text-color has-contrast-color has-alpha-channel-opacity has-contrast-background-color has-background is-style-wide" style="margin-top:var(--wp--preset--spacing--30);margin-bottom:0"/>
<!-- /wp:separator --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
<!-- /wp:post-template --></div>
<!-- /wp:query --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
