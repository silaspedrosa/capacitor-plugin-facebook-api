
  Pod::Spec.new do |s|
    s.name = 'FacebookApi'
    s.version = '0.0.1'
    s.summary = 'Capacitor plugin for the Facebook API'
    s.license = 'MIT'
    s.homepage = 'git@github.com:silaspedrosa/capacitor-plugin-facebook-api.git'
    s.author = 'Silas Pedrosa'
    s.source = { :git => 'git@github.com:silaspedrosa/capacitor-plugin-facebook-api.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end