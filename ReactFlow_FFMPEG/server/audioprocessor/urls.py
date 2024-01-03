# audioprocessor/urls.py
from django.urls import path
from .views import VideoUploadView,VideoDetailView,BgMusicUploadView,CombineMusicView,CombinedAudioView,CombineMediaView,FinalVideoView,download_video,ExampleTableView

urlpatterns = [
    path('videos/', VideoUploadView.as_view(), name='video-list-create'),
    path('videos/<int:id>/',VideoDetailView.as_view()),
    path('bgMusic/',BgMusicUploadView.as_view(), name='music_file_upload'),
    path('combine-audio/', CombineMusicView.as_view(), name='combine_audio'),
    path('combinedAudio/<int:id>/',CombinedAudioView.as_view()),
    path('finalVideo/', CombineMediaView.as_view()),
    path('finalVideo/<int:id>/',FinalVideoView.as_view()),
    path('api/download_video/<int:video_id>/', download_video, name='download_video'),
    path('exampleTable/', ExampleTableView.as_view()),
]
