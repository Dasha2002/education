<section class="popap">
    <div class="popap-block">
        <button class="btn-close"><img src="assets/img/Frame 2432.svg"></button>
        <div class="header-popap">
            <img src="assets/img/5bd4057d-09b3-421a-8bf3-fd4ab21e4e62_removalai_preview 1.svg">
            <h2>Заполните форму,<br> что бы начать обучение</h2>
            <p>С вами свяжется специалист приёмной комиссии,<br> даст консультацию и ответит на любые вопросы!</p>
        </div>

        <div class="form-popap">
            <form>

                <div class="form-fields">
                    <div class="personal-inf">
                        <!-- Поле для имени -->
                        <div class="form-group">
                            <label for="name">Ваше имя</label>
                            <input type="text" id="name" name="name" placeholder="Имя" required>
                        </div>

                        <!-- Поле для телефона -->
                        <div class="form-group">
                            <label for="phone">Ваш телефон</label>
                            <input type="tel" id="phone" name="phone" placeholder="+7 (___) ___-__-__" required maxlength="11">
                        </div>

                        <!-- Поле для email -->
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="example@mail.ru" required>
                        </div>
                    </div>


                    <!--Кнопки выбора уровня-->
                    <div class="level">
                        <p class="level-p">Уровень образования</p>
                        <div class="nav-programs">
                            <button class="main-2-btn-prog-bachelor active" data-level="all">Колледж</button>
                            <button class="main-2-btn-prog-magistr" data-level="bachelor">Бакалавриат</button>
                            <button class="main-2-btn-prog-magistr" data-level="master">Магистратура</button>
                        </div>
                    </div>


                    <!-- Выпадающий список для специальности -->
                    <div class="form-group">
                        <label for="specialty">Направление</label>
                        <div class="custom-select-wrapper">
                            <select id="specialty" name="specialty" required>
                                <option value="" disabled selected>Все направления</option>
                                <option value="it">Информационные технологии</option>
                                <option value="business">Бизнес и менеджмент</option>
                                <option value="design">Дизайн</option>
                                <option value="marketing">Маркетинг</option>
                                <option value="economics">Экономика</option>
                            </select>
                        </div>
                    </div>

                    <!-- Кнопка отправки формы -->
                    <button type="submit" class="submit-btn">Оставить заявку</button>

                    <!--Ссылка соглавие на обработку-->
                    <p class="form-approval">Отправляя данную форму вы соглашаетесь с <a href="https://new.mfpuperm.ru/privacy-policy" class="confident">политикой конфиденциальности</a></p>
                </div>

            </form>
        </div>
    </div>
</section>