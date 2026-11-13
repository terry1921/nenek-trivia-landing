# Revisión de contenido y fuentes — issue #8

Fecha de revisión: 12 de noviembre de 2026.

## Contenido y capturas

- La ficha pública de [Nenek Trivia en Google Play](https://play.google.com/store/apps/details?id=com.fenixarts.nenektrivia&hl=es_MX) usa el nombre «Nenek Trivia», describe preguntas sobre la Huasteca Potosina e indica que la app contiene anuncios.
- Google Play muestra cuatro capturas. Se compararon visualmente con `../_images/screenshots/1.png` a `4.png`; son las mismas imágenes de la ficha. `5.png` es una imagen antigua con el texto de plantilla «The next title here» y no está referenciada en `_data/app.yml`.
- La descripción de `_data/app.yml` se actualizó para quitar errores gramaticales y afirmaciones de invitación/competencia entre amigos que no están respaldadas por la ficha ni por la revisión de código. El enlace de Play conserva el paquete `com.fenixarts.nenektrivia`, visible en la ficha pública.

## Comportamiento comprobado en el repositorio de Android

Repositorio local revisado: `/Users/terry/Development/NenekTrivia`.

- `app/build.gradle.kts` declara `versionCode = 9`, `versionName = "0.0.4"` y un sabor `fenixarts` con paquete `com.fenixarts.nenektrivia`. Esto acredita el código local, no que esa versión esté publicada en producción.
- `network/src/main/kotlin/dev/terry1921/nenektrivia/network/auth/FirebaseRemoteAuthRepository.kt` implementa inicio de sesión con credenciales de Google y Facebook y mapea el perfil de Firebase Auth.
- `domain/src/main/kotlin/dev/terry1921/nenektrivia/domain/honor/SyncHonorForGameResultUseCase.kt` sincroniza identificador, imagen, puntuación y nombre de usuario. `network/src/main/kotlin/dev/terry1921/nenektrivia/network/honor/FirebaseHonorRepository.kt` y `network/src/main/kotlin/dev/terry1921/nenektrivia/network/leaderboard/FirebaseLeaderboardRepository.kt` escriben y leen el cuadro de honor.
- `database/src/main/kotlin/dev/terry1921/nenektrivia/database/auth/LocalAccountDeletion.kt` elimina el usuario de la base local; `network/src/main/kotlin/dev/terry1921/nenektrivia/network/auth/FirebaseAccountDeletion.kt` elimina la cuenta y su entrada remota del cuadro de honor.
- `app/build.gradle.kts` incluye Firebase Analytics y Crashlytics. No se encontró una dependencia directa de AdMob en el código revisado.
- `database/src/main/kotlin/dev/terry1921/nenektrivia/database/entity/User.kt` y `GameSession.kt` describen datos de perfil y sesión guardados localmente.
- `privacy_lacta.md` y `privacy_lacta.html` son de LactaGuía y se mantienen separados; esta tarea no los modifica.

## Diferencias que requieren confirmación de la versión de producción

En la ficha pública, Google Play muestra «Contiene anuncios». Su sección Seguridad de los datos dice que la app podría compartir información personal, a la vez que indica «No se recopilan datos», «Los datos están encriptados en tránsito» y «No se pueden borrar». Esto no concuerda claramente con el código local, que sincroniza perfiles y puntuaciones con Firebase y contiene un flujo de eliminación de cuenta. La ficha pública indica como última actualización el 28 de noviembre de 2020; no se verificó que el binario de producción coincida con `versionCode 9` del repositorio local.

Por esa razón, el aviso de privacidad describe las funciones comprobadas en el código fuente disponible, identifica que Google Play declara anuncios y no atribuye esos anuncios a un SDK/proveedor que no se encontró en el código. Antes de afirmar que el aviso representa por completo el binario publicado, hay que cotejar el AAB/track de producción, el proveedor publicitario y la configuración de Firebase y corregir la sección Seguridad de los datos de Play Console si corresponde. No se inspeccionaron reglas/configuración privada de Firebase ni archivos de credenciales.

## Referencias técnicas

- [Firebase: privacidad y seguridad](https://firebase.google.com/support/privacy)
- [Firebase Analytics para Android](https://firebase.google.com/docs/analytics/android/get-started)
- [Google Play: requisitos de Seguridad de los datos](https://support.google.com/googleplay/android-developer/answer/10787469?hl=es-419)

Estas referencias describen capacidades y requisitos de los proveedores; la configuración real del proyecto Firebase y el formulario de Play deben verificarse en las cuentas de producción.
