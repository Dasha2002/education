<?php
/**
 * vem-maf.ru functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package csd23.ru
 * @since csd23.ru
 */

add_theme_support('post-thumbnails');

function mytheme_enqueue_styles() {
    wp_enqueue_style('style', get_stylesheet_uri()); // Подключает основной файл стилей style.css
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/assets/css/style.css?v='.time()); // Подключение дополнительного файла стилей
    wp_enqueue_style('amedia-custom-style', get_template_directory_uri() . '/assets/css/amedia.css?v='.time()); // Подключение дополнительного файла стилей
}
add_action('wp_enqueue_scripts', 'mytheme_enqueue_styles');


/**
 * Автоматическая транслитерация кириллических URL (слагов) в латиницу
 * Преобразует название записи в латинские символы при сохранении/обновлении
 */
function transliterate_slug($title, $raw_title = '', $context = '') {
    // Работаем только при сохранении (чтобы не мешать ручному редактированию слага)
    if ('save' !== $context) {
        return $title;
    }
    
    // Таблица соответствия русских и английских символов
    $translit_table = array(
        'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd',
        'е' => 'e', 'ё' => 'yo', 'ж' => 'zh', 'з' => 'z', 'и' => 'i',
        'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n',
        'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't',
        'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'ts', 'ч' => 'ch',
        'ш' => 'sh', 'щ' => 'sch', 'ъ' => '', 'ы' => 'y', 'ь' => '',
        'э' => 'e', 'ю' => 'yu', 'я' => 'ya',
        'А' => 'A', 'Б' => 'B', 'В' => 'V', 'Г' => 'G', 'Д' => 'D',
        'Е' => 'E', 'Ё' => 'Yo', 'Ж' => 'Zh', 'З' => 'Z', 'И' => 'I',
        'Й' => 'Y', 'К' => 'K', 'Л' => 'L', 'М' => 'M', 'Н' => 'N',
        'О' => 'O', 'П' => 'P', 'Р' => 'R', 'С' => 'S', 'Т' => 'T',
        'У' => 'U', 'Ф' => 'F', 'Х' => 'H', 'Ц' => 'Ts', 'Ч' => 'Ch',
        'Ш' => 'Sh', 'Щ' => 'Sch', 'Ъ' => '', 'Ы' => 'Y', 'Ь' => '',
        'Э' => 'E', 'Ю' => 'Yu', 'Я' => 'Ya',
    );
    
    // Заменяем кириллические символы
    $title = strtr($title, $translit_table);
    
    // Заменяем все оставшиеся не-ASCII символы на дефис
    $title = preg_replace('/[^\x20-\x7E]/u', '-', $title);
    
    // Заменяем пробелы и другие специальные символы на дефисы
    $title = preg_replace('/[^\w\p{L}\p{N}_-]/u', '-', $title);
    
    // Убираем множественные дефисы
    $title = preg_replace('/-+/', '-', $title);
    
    // Убираем дефисы в начале и конце
    $title = trim($title, '-');
    
    // Переводим в нижний регистр
    $title = strtolower($title);
    
    // Если результат пустой, создаем slug из даты
    if (empty($title)) {
        $title = 'post-' . date('Y-m-d-H-i-s');
    }
    
    return $title;
}
add_filter('sanitize_title', 'transliterate_slug', 9, 3);


function create_faq_post_type() {
    register_post_type('faq',
        array(
            'labels' => array(
                'name'          => __('Вопросы и ответы'), // Название пункта в меню
                'singular_name' => __('Вопрос'), // Название для одной записи
                'add_new'       => __('Добавить новый вопрос'),
                'add_new_item'  => __('Добавить новый вопрос'),
                'edit_item'     => __('Редактировать вопрос'),
                'new_item'      => __('Новый вопрос'),
                'view_item'     => __('Посмотреть вопрос'),
                'search_items'  => __('Найти вопросы'),
                'not_found'     => __('Вопросы не найдены'),
                'not_found_in_trash' => __('В корзине вопросов не найдено'),
                'parent_item_colon' => ''
            ),
            'public' => true,
            'has_archive' => false, // Архив нам не нужен
            'menu_icon' => 'dashicons-format-chat', // Иконка в меню
            'supports' => array('title', 'editor'), // Поддерживаем заголовок и редактор
            'rewrite' => array('slug' => 'faq'),
        )
    );
}
add_action('init', 'create_faq_post_type');



function create_video_review_post_type() {
    register_post_type('video_review',
        array(
            'labels' => array(
                'name'          => __('Видеоотзывы'),
                'singular_name' => __('Видеоотзыв'),
                'add_new'       => __('Добавить новый отзыв'),
                'add_new_item'  => __('Добавить новый отзыв'),
                'edit_item'     => __('Редактировать отзыв'),
                'new_item'      => __('Новый отзыв'),
                'view_item'     => __('Посмотреть отзыв'),
                'search_items'  => __('Найти отзывы'),
                'not_found'     => __('Отзывы не найдены'),
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => 'dashicons-video-alt2', // Иконка видео
            'supports' => array('title', 'thumbnail'), // Поддерживаем заголовок и миниатюру (изображение)
            'rewrite' => array('slug' => 'video-review'),
        )
    );
}
add_action('init', 'create_video_review_post_type');

if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Настройки сайта',
        'menu_title'    => 'Настройки сайта',
        'menu_slug'     => 'site-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));
}