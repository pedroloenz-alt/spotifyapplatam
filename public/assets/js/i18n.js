/* =========================================================
   Spotify Rewards – Auto translation (IP based) + selector
   Languages: es (default - LATAM/Spain) · pt (Brazil) · en (English)
   ========================================================= */
(function () {
  "use strict";

  var STORAGE_KEY = "sp_lang";
  var AUTO_KEY = "sp_lang_auto";
  var SPANISH_COUNTRIES = [
    "AR","BO","CL","CO","CR","CU","DO","EC","SV","GT","HN","MX",
    "NI","PA","PY","PE","PR","UY","VE","GQ","ES"
  ];

  /* ---------- Dictionary: source text -> translations ---------- */
  /* Keys are the strings as they exist in the markup / scripts today. */
  var D = {
    // --- Welcome / hero ---
    "Spotify Rewards – Evaluar & Ganar": { pt: "Spotify Rewards – Avaliar & Ganhar", en: "Spotify Rewards – Evaluate & Earn", es: "Spotify Rewards – Evaluar & Ganar" },
    "⭐ Selected Program": { pt: "⭐ Programa selecionado", es: "⭐ Programa seleccionado", en: "⭐ Selected Program" },
    "¡Has sido seleccionado para evaluar música en Spotify!": { pt: "Você foi selecionado para avaliar músicas no Spotify!", en: "You have been selected to evaluate music on Spotify!", es: "¡Has sido seleccionado para evaluar música en Spotify!" },
    "Escucha canciones y califícalas. ¡Evaluaciones ilimitadas disponibles — cada evaluación": { pt: "Ouça músicas e avalie-as. Avaliações ilimitadas disponíveis — cada avaliação", en: "Listen to songs and rate them. Unlimited evaluations available — every evaluation", es: "Escucha canciones y califícalas. ¡Evaluaciones ilimitadas disponibles — cada evaluación" },
    "se paga directamente a": { pt: "é paga diretamente na", en: "is paid directly to", es: "se paga directamente a" },
    "tu cuenta!": { pt: "sua conta!", en: "your account!", es: "¡tu cuenta!" },
    "Comenzar a evaluar →": { pt: "Começar a avaliar →", en: "Start evaluating →", es: "Comenzar a evaluar →" },
    "🔒 Programa seguro y verificado": { pt: "🔒 Programa seguro e verificado", en: "🔒 Secure and verified program", es: "🔒 Programa seguro y verificado" },

    // --- Evaluation screen ---
    "Escucha la música de abajo y": { pt: "Ouça as músicas abaixo e", en: "Listen to the music below and", es: "Escucha la música de abajo y" },
    "cobra por hacerlo": { pt: "receba por isso", en: "get paid for it", es: "cobra por hacerlo" },
    "Canción 1": { pt: "Música 1", en: "Song 1", es: "Canción 1" },
    "🎵 Press play, listen to the song, answer the questions below, then tap": { pt: "🎵 Toque em play, ouça a música, responda às perguntas abaixo e clique em", es: "🎵 Presiona play, escucha la canción, responde las preguntas y toca", en: "🎵 Press play, listen to the song, answer the questions below, then tap" },
    "FINISH & Ganar": { pt: "FINALIZAR & Ganhar", es: "TERMINAR & Ganar", en: "FINISH & Earn" },
    "Cargando...": { pt: "Carregando...", en: "Loading...", es: "Cargando..." },
    "Previsualizar": { pt: "Prévia", en: "Preview", es: "Previsualizar" },
    "Artista": { pt: "Artista", en: "Artist", es: "Artista" },
    "Guardar en Spotify": { pt: "Salvar no Spotify", en: "Save on Spotify", es: "Guardar en Spotify" },
    "¿Escuchas seguido a este artista?": { pt: "Você escuta esse artista com frequência?", en: "Do you listen to this artist often?", es: "¿Escuchas seguido a este artista?" },
    "¿Sueles escuchar esta canción?": { pt: "Você costuma ouvir essa música?", en: "Do you usually listen to this song?", es: "¿Sueles escuchar esta canción?" },
    "Sí": { pt: "Sim", en: "Yes", es: "Sí" },
    "No": { pt: "Não", en: "No", es: "No" },
    "Terminar & Ganar": { pt: "Finalizar & Ganhar", en: "Finish & Earn", es: "Terminar & Ganar" },
    "TERMINAR Y GANAR": { pt: "FINALIZAR E GANHAR", en: "FINISH AND EARN", es: "TERMINAR Y GANAR" },
    "This site is protected by reCAPTCHA and is subject to the": { pt: "Este site é protegido por reCAPTCHA e está sujeito à", es: "Este sitio está protegido por reCAPTCHA y está sujeto a la", en: "This site is protected by reCAPTCHA and is subject to the" },
    "Privacy Policy": { pt: "Política de Privacidade", es: "Política de Privacidad", en: "Privacy Policy" },
    "and": { pt: "e", es: "y", en: "and" },
    "Terms of Service": { pt: "Termos de Serviço", es: "Términos del Servicio", en: "Terms of Service" },
    "Evaluation Submitted!": { pt: "Avaliação enviada!", es: "¡Evaluación enviada!", en: "Evaluation Submitted!" },
    "Balance Received": { pt: "Saldo recebido", es: "Saldo recibido", en: "Balance Received" },
    "Next Song": { pt: "Próxima música", es: "Siguiente canción", en: "Next Song" },
    "© 2026 Spotify Rewards Program. All rights reserved.": { pt: "© 2026 Spotify Rewards Program. Todos os direitos reservados.", es: "© 2026 Spotify Rewards Program. Todos los derechos reservados.", en: "© 2026 Spotify Rewards Program. All rights reserved." },

    // --- Withdraw screen ---
    "Available Balance": { pt: "Saldo disponível", es: "Saldo disponible", en: "Available Balance" },
    "Ready for instant PayPal transfer": { pt: "Pronto para transferência instantânea via PayPal", es: "Listo para transferencia instantánea por PayPal", en: "Ready for instant PayPal transfer" },
    "PayPal Withdrawal": { pt: "Saque via PayPal", es: "Retiro por PayPal", en: "PayPal Withdrawal" },
    "Funds arrive in 1–3 business days": { pt: "O valor chega em 1 a 3 dias úteis", es: "Los fondos llegan en 1 a 3 días hábiles", en: "Funds arrive in 1–3 business days" },
    "PayPal Email": { pt: "E-mail do PayPal", es: "Correo de PayPal", en: "PayPal Email" },
    "Enter your verified PayPal email address": { pt: "Informe seu e-mail verificado do PayPal", es: "Ingresa tu correo verificado de PayPal", en: "Enter your verified PayPal email address" },
    "Amount (USD)": { pt: "Valor (USD)", es: "Monto (USD)", en: "Amount (USD)" },
    "Minimum withdrawal limit: $6,000.00 USD | Max available: $0.00": { pt: "Limite mínimo de saque: $6.000,00 USD | Máx. disponível: $0,00", es: "Límite mínimo de retiro: $6,000.00 USD | Máx. disponible: $0.00", en: "Minimum withdrawal limit: $6,000.00 USD | Max available: $0.00" },
    "Transfer via PayPal": { pt: "Transferir via PayPal", es: "Transferir por PayPal", en: "Transfer via PayPal" },
    "🔒 256-bit SSL encrypted · PayPal protected": { pt: "🔒 Criptografia SSL 256 bits · Protegido pelo PayPal", es: "🔒 Cifrado SSL de 256 bits · Protegido por PayPal", en: "🔒 256-bit SSL encrypted · PayPal protected" },
    "Processing transaction…": { pt: "Processando transação…", es: "Procesando transacción…", en: "Processing transaction…" },
    "Solicitar Retiro": { pt: "Solicitar saque", en: "Request withdrawal", es: "Solicitar Retiro" },
    "Procesando...": { pt: "Processando...", en: "Processing...", es: "Procesando..." },
    "Saldo insuficiente": { pt: "Saldo insuficiente", en: "Insufficient balance", es: "Saldo insuficiente" },
    "El monto mínimo es de $6,000.00": { pt: "O valor mínimo é de $6.000,00", en: "The minimum amount is $6,000.00", es: "El monto mínimo es de $6,000.00" },
    "Por favor, completá todos los campos": { pt: "Por favor, preencha todos os campos", en: "Please fill in all fields", es: "Por favor, completa todos los campos" },
    "¡Retiro solicitado con éxito!": { pt: "Saque solicitado com sucesso!", en: "Withdrawal requested successfully!", es: "¡Retiro solicitado con éxito!" },
    "Max available: $": { pt: "Máx. disponível: $", es: "Máx. disponible: $", en: "Max available: $" },
    "You've got money!": { pt: "Você recebeu dinheiro!", es: "¡Recibiste dinero!", en: "You've got money!" },

    // --- Support ---
    "Soporte": { pt: "Suporte", en: "Support", es: "Soporte" },
    "Support": { pt: "Suporte", es: "Soporte", en: "Support" },
    "¿Tienes problemas? Envíanos un mensaje y te responderemos dentro de 24 horas.": { pt: "Está com problemas? Envie uma mensagem e responderemos em até 24 horas.", en: "Having trouble? Send us a message and we'll reply within 24 hours.", es: "¿Tienes problemas? Envíanos un mensaje y te responderemos dentro de 24 horas." },
    "Response time": { pt: "Tempo de resposta", es: "Tiempo de respuesta", en: "Response time" },
    "Under 24h": { pt: "Menos de 24h", es: "Menos de 24h", en: "Under 24h" },
    "Availability": { pt: "Disponibilidade", es: "Disponibilidad", en: "Availability" },
    "Security": { pt: "Segurança", es: "Seguridad", en: "Security" },
    "SSL 256-bit": { pt: "SSL 256 bits", es: "SSL 256 bits", en: "SSL 256-bit" },
    "📩 Send a message": { pt: "📩 Enviar uma mensagem", es: "📩 Enviar un mensaje", en: "📩 Send a message" },
    "Full Name": { pt: "Nome completo", es: "Nombre completo", en: "Full Name" },
    "Email": { pt: "E-mail", es: "Correo electrónico", en: "Email" },
    "Subject": { pt: "Assunto", es: "Asunto", en: "Subject" },
    "Select a subject": { pt: "Selecione um assunto", es: "Selecciona un asunto", en: "Select a subject" },
    "Withdrawal issue": { pt: "Problema com saque", es: "Problema con el retiro", en: "Withdrawal issue" },
    "Balance Not updated": { pt: "Saldo não atualizado", es: "Saldo no actualizado", en: "Balance not updated" },
    "Technical problem": { pt: "Problema técnico", es: "Problema técnico", en: "Technical problem" },
    "Account question": { pt: "Dúvida sobre a conta", es: "Consulta sobre la cuenta", en: "Account question" },
    "Other": { pt: "Outro", es: "Otro", en: "Other" },
    "Message": { pt: "Mensagem", es: "Mensaje", en: "Message" },
    "Send Message": { pt: "Enviar mensagem", es: "Enviar mensaje", en: "Send Message" },
    "Mensaje enviado!": { pt: "Mensagem enviada!", en: "Message sent!", es: "¡Mensaje enviado!" },
    "Recibimos tu mensaje y responderemos a tu correo dentro de 24 horas.": { pt: "Recebemos sua mensagem e responderemos no seu e-mail em até 24 horas.", en: "We received your message and will reply to your email within 24 hours.", es: "Recibimos tu mensaje y responderemos a tu correo dentro de 24 horas." },
    "Send aNother": { pt: "Enviar outra", es: "Enviar otro", en: "Send another" },
    "Please fill in all fields.": { pt: "Por favor, preencha todos os campos.", es: "Por favor, completa todos los campos.", en: "Please fill in all fields." },

    // --- FAQ ---
    "FAQ": { es: "Preguntas Frecuentes" },
    "¿Cómo recibo mi pago?": { pt: "Como recebo meu pagamento?", en: "How do I receive my payment?", es: "¿Cómo recibo mi pago?" },
    "Tus ganancias se acumulan con cada evaluación de canción. Una vez que completes las 10 canciones, puedes retirar tu saldo vía PayPal directamente desde la pestaña de Cobrar.": { pt: "Seus ganhos se acumulam com cada avaliação de música. Depois de completar as 10 músicas, você pode sacar seu saldo via PayPal direto na aba Sacar.", en: "Your earnings add up with each song evaluation. Once you complete the 10 songs, you can withdraw your balance via PayPal from the Withdraw tab.", es: "Tus ganancias se acumulan con cada evaluación de canción. Una vez que completes las 10 canciones, puedes retirar tu saldo vía PayPal directamente desde la pestaña de Cobrar." },
    "¿Cuánto tarda un retiro?": { pt: "Quanto tempo leva um saque?", en: "How long does a withdrawal take?", es: "¿Cuánto tarda un retiro?" },
    "Las transferencias de PayPal suelen llegar dentro de 1 a 3 días hábiles después de ser procesadas. Recibirás una confirmación por correo electrónico una vez que los fondos hayan sido enviados.": { pt: "As transferências do PayPal normalmente chegam em 1 a 3 dias úteis após o processamento. Você receberá uma confirmação por e-mail assim que os fundos forem enviados.", en: "PayPal transfers usually arrive within 1 to 3 business days after processing. You'll get an email confirmation once the funds are sent.", es: "Las transferencias de PayPal suelen llegar dentro de 1 a 3 días hábiles después de ser procesadas. Recibirás una confirmación por correo electrónico una vez que los fondos hayan sido enviados." },
    "¿Cuál es el monto mínimo de retiro?": { pt: "Qual é o valor mínimo de saque?", en: "What is the minimum withdrawal amount?", es: "¿Cuál es el monto mínimo de retiro?" },
    "El monto mínimo de retiro es de $6,000.00 USD. Puedes solicitar un retiro una vez que tu saldo alcance los $6,000.00.": { pt: "O valor mínimo de saque é de $6.000,00 USD. Você pode solicitar o saque quando seu saldo alcançar $6.000,00.", en: "The minimum withdrawal amount is $6,000.00 USD. You can request a withdrawal once your balance reaches $6,000.00.", es: "El monto mínimo de retiro es de $6,000.00 USD. Puedes solicitar un retiro una vez que tu saldo alcance los $6,000.00." },
    "¿Cuántas canciones puedo evaluar por día?": { pt: "Quantas músicas posso avaliar por dia?", en: "How many songs can I evaluate per day?", es: "¿Cuántas canciones puedo evaluar por día?" },
    "Puedes evaluar canciones ilimitadas por día. Cada evaluación te recompensa con un pago que depende de la calificación de la canción.": { pt: "Você pode avaliar músicas ilimitadas por dia. Cada avaliação te recompensa com um pagamento que depende da nota da música.", en: "You can evaluate unlimited songs per day. Each evaluation rewards you with a payment based on the song's rating.", es: "Puedes evaluar canciones ilimitadas por día. Cada evaluación te recompensa con un pago que depende de la calificación de la canción." },
    "¿Es legítimo este programa?": { pt: "Este programa é legítimo?", en: "Is this program legitimate?", es: "¿Es legítimo este programa?" },
    "Sí. Spotify Rewards es un programa de investigación de mercado verificado. Tus evaluaciones musicales honestas ayudan a Spotify a mejorar sus algoritmos de recomendación y la curaduría de playlists.": { pt: "Sim. O Spotify Rewards é um programa verificado de pesquisa de mercado. Suas avaliações musicais honestas ajudam o Spotify a melhorar os algoritmos de recomendação e a curadoria de playlists.", en: "Yes. Spotify Rewards is a verified market research program. Your honest music evaluations help Spotify improve its recommendation algorithms and playlist curation.", es: "Sí. Spotify Rewards es un programa de investigación de mercado verificado. Tus evaluaciones musicales honestas ayudan a Spotify a mejorar sus algoritmos de recomendación y la curaduría de playlists." },

    // --- Limits / popups ---
    "🔒 Status: Límite alcanzado": { pt: "🔒 Status: limite atingido", en: "🔒 Status: limit reached", es: "🔒 Estado: Límite alcanzado" },
    "Límite diario alcanzado!": { pt: "Limite diário atingido!", en: "Daily limit reached!", es: "¡Límite diario alcanzado!" },
    "Has evaluado": { pt: "Você avaliou", en: "You have evaluated", es: "Has evaluado" },
    "10 canciones": { pt: "10 músicas", en: "10 songs", es: "10 canciones" },
    "hoy. Retira tu saldo para continuar.": { pt: "hoje. Saque seu saldo para continuar.", en: "today. Withdraw your balance to continue.", es: "hoy. Retira tu saldo para continuar." },
    "Límite diario:": { pt: "Limite diário:", en: "Daily limit:", es: "Límite diario:" },
    "Ganancias de hoy:": { pt: "Ganhos de hoje:", en: "Today's earnings:", es: "Ganancias de hoy:" },
    "Retirar dinero": { pt: "Sacar dinheiro", en: "Withdraw money", es: "Retirar dinero" },
    "🔒 Retiro instantáneo desbloqueado": { pt: "🔒 Saque instantâneo desbloqueado", en: "🔒 Instant withdrawal unlocked", es: "🔒 Retiro instantáneo desbloqueado" },
    "Ahora": { pt: "Agora", en: "Now", es: "Ahora" },
    "Pago recibido": { pt: "Pagamento recebido", en: "Payment received", es: "Pago recibido" },
    "evaluar": { pt: "avaliar", en: "evaluate", es: "evaluar" },
    "Retirar": { pt: "Sacar", en: "Withdraw", es: "Retirar" },
    "Límite alcanzado": { pt: "Limite atingido", en: "Limit reached", es: "Límite alcanzado" },
    "Las próximas evaluaciones estarán disponibles en:": { pt: "As próximas avaliações estarão disponíveis em:", en: "The next evaluations will be available in:", es: "Las próximas evaluaciones estarán disponibles en:" },
    "OK, entendido": { pt: "OK, entendi", en: "Got it", es: "OK, entendido" },
    "¡Todo listo!": { pt: "Tudo pronto!", en: "All done!", es: "¡Todo listo!" },
    "Ya evaluaste todas las canciones disponibles. ¿Quieres reiniciar para seguir ganando?": { pt: "Você já avaliou todas as músicas disponíveis. Quer reiniciar para continuar ganhando?", en: "You've evaluated every available song. Do you want to restart and keep earning?", es: "Ya evaluaste todas las canciones disponibles. ¿Quieres reiniciar para seguir ganando?" },
    "Hoy": { pt: "Hoje", en: "Today", es: "Hoy" },
    "Total": { es: "Total" },
    "Reiniciar y continuar": { pt: "Reiniciar e continuar", en: "Restart and continue", es: "Reiniciar y continuar" },
    "Cancelar": { pt: "Cancelar", en: "Cancel", es: "Cancelar" },
    "¡Felicitaciones!": { pt: "Parabéns!", en: "Congratulations!", es: "¡Felicitaciones!" },
    "¡Ganaste!": { pt: "Você ganhou!", en: "You earned!", es: "¡Ganaste!" },
    "No se encontraron canciones": { pt: "Nenhuma música encontrada", en: "No songs found", es: "No se encontraron canciones" },
    "Agrega tus archivos de audio en assets/audio/.": { pt: "Adicione seus arquivos de áudio em assets/audio/.", en: "Add your audio files to assets/audio/.", es: "Agrega tus archivos de audio en assets/audio/." },
    "Evaluation limit reached": { pt: "Limite de avaliações atingido", es: "Límite de evaluaciones alcanzado", en: "Evaluation limit reached" },
    "The next evaluations will be available in:": { pt: "As próximas avaliações estarão disponíveis em:", es: "Las próximas evaluaciones estarán disponibles en:", en: "The next evaluations will be available in:" },
    "Come back in 4 hours to keep earning 💰": { pt: "Volte em 4 horas para continuar ganhando 💰", es: "Vuelve en 4 horas para seguir ganando 💰", en: "Come back in 4 hours to keep earning 💰" },
    "Got it, I'll come back later": { pt: "Entendi, volto mais tarde", es: "Entendido, vuelvo más tarde", en: "Got it, I'll come back later" },

    // --- High demand popup ---
    "Withdrawal temporarily limited": { pt: "Saque temporariamente limitado", es: "Retiro temporalmente limitado", en: "Withdrawal temporarily limited" },
    "Saque temporariamente limitado": { es: "Retiro temporalmente limitado", en: "Withdrawal temporarily limited", pt: "Saque temporariamente limitado" },
    "Due to": { pt: "Devido à", es: "Debido a la", en: "Due to" },
    "high withdrawal demand": { pt: "alta demanda de saques", es: "alta demanda de retiros", en: "high withdrawal demand" },
    "on the platform, the minimum withdrawal amount has been temporarily adjusted to": { pt: "na plataforma, o valor mínimo para saque foi ajustado temporariamente para", es: "en la plataforma, el monto mínimo de retiro fue ajustado temporalmente a", en: "on the platform, the minimum withdrawal amount has been temporarily adjusted to" },
    "📢 This measure protects users and ensures payment security. Keep evaluating songs to reach the limit!": { pt: "📢 Esta medida protege os usuários e garante a segurança dos pagamentos. Continue avaliando músicas para atingir o limite!", es: "📢 Esta medida protege a los usuarios y garantiza la seguridad de los pagos. ¡Sigue evaluando canciones para alcanzar el límite!", en: "📢 This measure protects users and ensures payment security. Keep evaluating songs to reach the limit!" },
    "Got it, keep evaluating": { pt: "Entendi, continuar avaliando", es: "Entendido, seguir evaluando", en: "Got it, keep evaluating" },

    // --- Exit / gift card / expiry ---
    "¡Espera!": { pt: "Espere!", en: "Wait!", es: "¡Espera!" },
    "Tienes": { pt: "Você tem", en: "You have", es: "Tienes" },
    "acumulados que podrías perder si no desbloqueas tu cuenta hoy.": { pt: "acumulados que você pode perder se não desbloquear sua conta hoje.", en: "accumulated that you could lose if you don't unlock your account today.", es: "acumulados que podrías perder si no desbloqueas tu cuenta hoy." },
    "🔓 Desbloquear y Sacar Ahora": { pt: "🔓 Desbloquear e sacar agora", en: "🔓 Unlock and withdraw now", es: "🔓 Desbloquear y Retirar Ahora" },
    "Salir sin retirar": { pt: "Sair sem sacar", en: "Leave without withdrawing", es: "Salir sin retirar" },
    "Tarjeta Amazon $100": { pt: "Cartão Amazon $100", en: "$100 Amazon Card", es: "Tarjeta Amazon $100" },
    "¡Tienes una": { pt: "Você tem um", en: "You have a", es: "¡Tienes una" },
    "tarjeta de regalo de Amazon de $100": { pt: "cartão-presente Amazon de $100", en: "$100 Amazon gift card", es: "tarjeta de regalo de Amazon de $100" },
    "esperándote!": { pt: "esperando por você!", en: "waiting for you!", es: "¡esperándote!" },
    "Podrás retirarla junto con tu saldo acumulado al activar tu cuenta": { pt: "Você poderá resgatá-lo junto com seu saldo acumulado ao ativar sua conta", en: "You'll be able to redeem it with your balance when you activate your account", es: "Podrás retirarla junto con tu saldo acumulado al activar tu cuenta" },
    "Premium": { es: "Premium" },
    "El código será enviado directamente a tu correo de PayPal.": { pt: "O código será enviado direto para o e-mail do seu PayPal.", en: "The code will be sent straight to your PayPal email.", es: "El código será enviado directamente a tu correo de PayPal." },
    "🔓 Desbloquear y Recibir mi Tarjeta": { pt: "🔓 Desbloquear e receber meu cartão", en: "🔓 Unlock and get my card", es: "🔓 Desbloquear y Recibir mi Tarjeta" },
    "Más tarde": { pt: "Mais tarde", en: "Later", es: "Más tarde" },
    "expira en": { pt: "expira em", en: "expires in", es: "expira en" },
    "7 días": { pt: "7 dias", en: "7 days", es: "7 días" },
    "Retíralo ahora →": { pt: "Saque agora →", en: "Withdraw now →", es: "Retíralo ahora →" },

    // --- Attributes / placeholders ---
    "Your name": { pt: "Seu nome", es: "Tu nombre", en: "Your name" },
    "your@email.com": { es: "tu@email.com" },
    "Describe your issue...": { pt: "Descreva seu problema...", es: "Describe tu problema...", en: "Describe your issue..." },
    "e.g. 6000.00": { pt: "ex.: 6000.00", es: "ej. 6000.00", en: "e.g. 6000.00" },
    "Cover": { pt: "Capa", es: "Portada", en: "Cover" },
    "Spotify Evaluator": { pt: "Avaliador Spotify", es: "Evaluador Spotify", en: "Spotify Evaluator" }
  };

  /* ---------- Interpolated sentences ---------- */
  var PATTERNS = [
    [/^🎉 Song finished! Answer the questions below and tap$/, { pt: "🎉 Música finalizada! Responda às perguntas abaixo e toque em", es: "🎉 ¡Canción finalizada! Responde las preguntas y toca", en: "🎉 Song finished! Answer the questions below and tap" }],
    [/^🎵 Listen to the song \((\d+)s remaining\) to unlock the questions\.$/, { pt: "🎵 Ouça a música ($1s restantes) para liberar as perguntas.", es: "🎵 Escucha la canción (faltan $1s) para desbloquear las preguntas.", en: "🎵 Listen to the song ($1s remaining) to unlock the questions." }],
    [/^Song (\d+)$/, { pt: "Música $1", es: "Canción $1", en: "Song $1" }],
    [/^Canción (\d+)$/, { pt: "Música $1", es: "Canción $1", en: "Song $1" }],
    [/^(\d+) completadas$/, { pt: "$1 concluídas", es: "$1 completadas", en: "$1 completed" }],
    [/^Spotify Rewards sent you \$(.+) USD\.$/, { pt: "O Spotify Rewards enviou $$$1 USD para você.", es: "Spotify Rewards te envió $$$1 USD.", en: "Spotify Rewards sent you $$$1 USD." }],
    [/^You have completed the (\d+) evaluations for this session\.$/, { pt: "Você concluiu as $1 avaliações desta sessão.", es: "Completaste las $1 evaluaciones de esta sesión.", en: "You have completed the $1 evaluations for this session." }],
    [/^Max available: \$(.+)$/, { pt: "Máx. disponível: $$$1", es: "Máx. disponible: $$$1", en: "Max available: $$$1" }],
    [/^Minimum withdrawal limit: \$([\d.,]+) USD \| Max available: \$(.+)$/, { pt: "Limite mínimo de saque: $$$1 USD | Máx. disponível: $$$2", es: "Límite mínimo de retiro: $$$1 USD | Máx. disponible: $$$2", en: "Minimum withdrawal limit: $$$1 USD | Max available: $$$2" }]
  ];

  var ATTRS = ["placeholder", "title", "alt", "aria-label"];
  var lang = "es";

  function normalize(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  function translateString(raw) {
    var key = normalize(raw);
    if (!key) return null;
    var entry = D[key];
    if (entry && entry[lang]) return entry[lang];
    for (var i = 0; i < PATTERNS.length; i++) {
      var m = key.match(PATTERNS[i][0]);
      if (m) {
        var target = PATTERNS[i][1][lang];
        if (!target) return null;
        return target.replace(/\$(\d)/g, function (_, n) {
          return m[Number(n)] || "";
        });
      }
    }
    return null;
  }

  function translateTextNode(node) {
    var raw = node.nodeValue;
    if (!raw || !/[A-Za-zÀ-ÿ]/.test(raw)) return;
    var parent = node.parentNode;
    if (!parent) return;
    var tag = parent.nodeName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return;
    if (parent.closest && parent.closest("[data-i18n-skip]")) return;
    var out = translateString(raw);
    if (out === null) return;
    var lead = raw.match(/^\s*/)[0];
    var trail = raw.match(/\s*$/)[0];
    node.nodeValue = lead + out + trail;
  }

  function translateElement(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var attr = ATTRS[i];
      var value = el.getAttribute && el.getAttribute(attr);
      if (value) {
        var out = translateString(value);
        if (out !== null) el.setAttribute(attr, out);
      }
    }
  }

  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    if (root.nodeType === 1) translateElement(root);
    if (root.querySelectorAll) {
      var els = root.querySelectorAll("*");
      for (var i = 0; i < els.length; i++) translateElement(els[i]);
    }
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (var j = 0; j < nodes.length; j++) translateTextNode(nodes[j]);
  }

  function translateDocument() {
    walk(document.body);
    applyTitle();
  }

  function applyTitle() {
    var out = translateString(document.title);
    if (out !== null) document.title = out;
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);
  }

  /* ---------- Language detection ---------- */
  function langFromCountry(country) {
    if (!country) return "es";
    if (country === "BR") return "pt";
    if (country === "PT") return "pt";
    if (SPANISH_COUNTRIES.indexOf(country) !== -1) return "es";
    return "es";
  }

  function langFromNavigator() {
    var nav = (navigator.language || "es").toLowerCase();
    if (nav.indexOf("pt") === 0) return "pt";
    if (nav.indexOf("es") === 0) return "es";
    return "es";
  }

  function stored(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function store(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      /* ignore */
    }
  }

  function resolveInitialLang() {
    return stored(STORAGE_KEY) || stored(AUTO_KEY) || langFromNavigator() || "es";
  }

  function detectByIp() {
    if (stored(STORAGE_KEY)) return; // manual choice wins
    fetch("/api/public/geo", { headers: { accept: "application/json" } })
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (data) {
        var detected = langFromCountry(data && data.country);
        if (!detected) return;
        store(AUTO_KEY, detected);
        if (detected !== lang) setLang(detected, false);
      })
      .catch(function () {
        /* offline: keep current */
      });
  }

  /* ---------- Language selector ---------- */
  var LABELS = { es: "Español", pt: "Português", en: "English" };
  var FLAGS = { es: "🇪🇸", pt: "🇧🇷", en: "🇺🇸" };

  function buildSelector() {
    if (document.getElementById("spLangSwitcher")) return;
    var wrap = document.createElement("div");
    wrap.id = "spLangSwitcher";
    wrap.setAttribute("data-i18n-skip", "");
    wrap.style.cssText =
      "position:fixed;top:10px;right:10px;z-index:100000;font-family:inherit;";

    var select = document.createElement("select");
    select.setAttribute("aria-label", "Idioma");
    select.style.cssText =
      "background:rgba(0,0,0,0.72);color:#fff;border:1px solid rgba(29,185,84,0.55);" +
      "border-radius:999px;padding:6px 10px;font-size:12px;font-weight:700;" +
      "backdrop-filter:blur(6px);cursor:pointer;outline:none;appearance:none;";

    ["es", "pt", "en"].forEach(function (code) {
      var opt = document.createElement("option");
      opt.value = code;
      opt.textContent = FLAGS[code] + " " + LABELS[code];
      opt.style.color = "#000";
      select.appendChild(opt);
    });
    select.value = lang;
    select.addEventListener("change", function () {
      store(STORAGE_KEY, select.value);
      setLang(select.value, true);
    });
    wrap.appendChild(select);
    document.body.appendChild(wrap);
  }

  function syncSelector() {
    var wrap = document.getElementById("spLangSwitcher");
    if (wrap) wrap.querySelector("select").value = lang;
  }

  /* ---------- Applying a language ---------- */
  function setLang(next, reload) {
    if (next === lang) return;
    if (reload) {
      window.location.reload();
      return;
    }
    lang = next;
    translateDocument();
    syncSelector();
  }

  function start() {
    lang = resolveInitialLang();
    translateDocument();
    buildSelector();
    detectByIp();

    var observer = new MutationObserver(function (mutations) {
      observer.disconnect();
      for (var i = 0; i < mutations.length; i++) {
        var mutation = mutations[i];
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target);
        } else {
          for (var j = 0; j < mutation.addedNodes.length; j++) {
            walk(mutation.addedNodes[j]);
          }
        }
      }
      observe();
    });

    function observe() {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }
    observe();

    window.SPI18N = {
      get lang() {
        return lang;
      },
      set: function (code) {
        store(STORAGE_KEY, code);
        setLang(code, true);
      },
      t: translateString,
      refresh: translateDocument,
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
