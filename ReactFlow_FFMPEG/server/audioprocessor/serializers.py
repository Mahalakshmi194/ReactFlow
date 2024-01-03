# audioprocessor/serializers.py
from rest_framework import serializers
from .models import Video,BgMusic,combinedMusic,CombinedMedia,ExampleTable

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'

class BgMusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = BgMusic
        fields = '__all__'

class combinedMusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = combinedMusic
        fields = '__all__'

class CombinedMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model =CombinedMedia
        fields = '__all__'

class ExampleTableSerializer(serializers.ModelSerializer):
    class Meta:
        model =ExampleTable
        fields = '__all__'
        