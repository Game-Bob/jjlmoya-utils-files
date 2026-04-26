import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'dosyalar-ve-metin',
  title: 'Dosya ve Metin Araçları',
  description: 'Tarayıcınızda doğrudan dosya ve metin üzerinde çalışmak için ücretsiz çevrimiçi araçlar. Panonuzu indirilebilir görüntülere dönüştürün, kurulum gerektirmez ve tam gizlilik.',
  seo: [
    {
      type: 'title',
      text: 'Neden tarayıcıdan dosya yönetilir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Günlük dosya ve metin görevleri - ekran görüntüsü kaydetme, format dönüştürme, metin çıkarma - genellikle ağır yazılım yüklemeyi veya verilerinizi harici sunuculara yükleyen çevrimiçi hizmetleri kullanmayı gerektirir. Bu araçlar <strong>tarayıcınızda %100 yerel olarak</strong> çalışır: verilerinizin hiçbiri cihazınızdan ayrılmaz.',
    },
    {
      type: 'paragraph',
      html: 'Modern tarayıcı, Clipboard API\'ye, yerel dosya sistemine ve görüntü işleme motorlarına yerel erişime sahiptir. Bu, hiçbir şey yüklemeden, hiçbir yere kaydolmadan veya herhangi bir reklam görmeden en yaygın masaüstü uygulama işlevlerini kopyalamayı mümkün kılar.',
    },
    {
      type: 'title',
      text: 'Pano: kopyala-yapıştırdan gerçek bir dosyaya',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Windows + Shift + S</strong> veya <strong>Cmd + Shift + 4</strong> ile ekran görüntüsü aldığınızda, görüntü panoya gelir ancak dosya olarak kaydedilmez. Bunu almak için normalde Paint, Photoshop veya başka bir editör açmanız, yapıştırmanız ve dışa aktarmanız gerekir. Pano-görüntü aracıyla tüm süreç <strong>Ctrl+V ve bir tıklamaya</strong> indirgenir.',
    },
    {
      type: 'paragraph',
      html: 'Dosyalar tam tarih ve saate dayalı bir adla indirilir, bu da ekran görüntülerini manuel olarak yeniden adlandırmadan kronolojik olarak düzenlemeyi kolaylaştırır. Çıktı formatı PNG\'dir; orijinal kaliteyi kayıpsız korur.',
    },
    {
      type: 'title',
      text: 'Tasarım gereği gizlilik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu kategorideki her araç tek bir ilke üzerine kurulmuştur: <strong>veriler tarayıcıyı hiçbir zaman terk etmez</strong>. Harici sunuculara istek yok, bulut depolama yok, etkinlik kaydı yok. Araca yapıştırdığınız her şey bellekte işlenir ve aracısız doğrudan diskinize indirilir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Kurulum gerekmez:</strong> Herhangi bir işletim sisteminde doğrudan tarayıcıda çalışır.',
        '<strong>Tam gizlilik:</strong> Hiçbir dosya veya metin hiçbir sunucuya gönderilmez.',
        '<strong>Ücretsiz:</strong> Kullanım sınırı yok, abonelik yok, filigran yok.',
        '<strong>Hızlı:</strong> İşleme yerel olduğundan hız, bağlantıya değil cihazınıza bağlıdır.',
      ],
    },
    {
      type: 'title',
      text: 'Verimlilik araçlarının geleceği',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Modern web API\'leri (Clipboard API, File System Access API, Canvas API), yerel bir uygulamanın yapabilecekleri ile tarayıcının yapabilecekleri arasındaki boşluğu kapattı. Bu kategorideki her yeni araç, <strong>bir URL\'nin erişilebilirliğiyle masaüstü düzeyinde işlevsellik</strong> sunmak için bu özellikleri kullanır.',
    },
  ],
};
