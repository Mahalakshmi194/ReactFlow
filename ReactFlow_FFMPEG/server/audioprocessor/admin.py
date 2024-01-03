from django.contrib import admin
from .models import Video,BgMusic,combinedMusic,ExampleTable

# Register your models here.
admin.site.register(Video)
admin.site.register(BgMusic)
admin.site.register(combinedMusic)
admin.site.register(ExampleTable)
